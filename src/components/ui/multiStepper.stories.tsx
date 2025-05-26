import type { Meta, StoryObj } from '@storybook/react';
import { Footprints, Home, Settings, User } from 'lucide-react';
import { AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { MultiStepper, MultiStepperAnimationWrapper } from './multiStepper';

const meta: Meta<typeof MultiStepper> = {
  title: 'UI/MultiStepper',
  component: MultiStepper,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story, context) => {
      const [currentStep, setCurrentStep] = useState(
        context.args.currentStep || 1,
      );
      const totalSteps = context.args.totalSteps || 4;

      return (
        <div className="flex flex-col items-center gap-8 w-[800px]">
          <Story args={{ ...context.args, currentStep }} />
          <div className="flex gap-4">
            <button
              type="button"
              className="rounded-md bg-primary px-4 py-2 text-white disabled:opacity-50"
              onClick={() => setCurrentStep((prev) => Math.max(1, prev - 1))}
              disabled={currentStep === 1}
            >
              Previous
            </button>
            <button
              type="button"
              className="rounded-md bg-primary px-4 py-2 text-white disabled:opacity-50"
              onClick={() =>
                setCurrentStep((prev) => Math.min(totalSteps, prev + 1))
              }
              disabled={currentStep === totalSteps}
            >
              Next
            </button>
          </div>
          <div className="text-sm text-gray-500">
            Current Step: {currentStep} of {totalSteps}
          </div>
        </div>
      );
    },
  ],
};

export default meta;

const basicSteps = [{ number: 1 }, { number: 2 }, { number: 3 }, { number: 4 }];

const iconSteps = [
  { number: 1, icon: <Home className="h-4 w-4" /> },
  { number: 2, icon: <User className="h-4 w-4" /> },
  { number: 3, icon: <Settings className="h-4 w-4" /> },
  { number: 4, icon: <Footprints className="h-4 w-4" /> },
];

// Sidebar Stories
type SidebarStory = StoryObj<typeof MultiStepper>;

export const VerticalBasic: SidebarStory = {
  args: {
    steps: basicSteps,
    currentStep: 1,
    variant: 'vertical',
  },
};

export const SidebarWithIconsHorizontal: SidebarStory = {
  args: {
    steps: iconSteps,
    currentStep: 1,
    variant: 'horizontal',
  },
};

export const Small: SidebarStory = {
  args: {
    steps: basicSteps,
    currentStep: 1,
    variant: 'small',
    totalSteps: 4,
  },
};

export const WithAnimation: SidebarStory = {
  args: {
    steps: iconSteps,
    currentStep: 1,
    variant: 'vertical',
  },
  decorators: [],
  render: (args) => {
    const [currentStep, setCurrentStep] = useState(args.currentStep);
    const [direction, setDirection] = useState<'forward' | 'backward'>(
      'forward',
    );

    const handleNext = () => {
      setDirection('forward');
      setCurrentStep((prev) => Math.min(args.steps?.length || 4, prev + 1));
    };

    const handlePrevious = () => {
      setDirection('backward');
      setCurrentStep((prev) => Math.max(1, prev - 1));
    };

    // Ensure we only pass 'vertical' or 'horizontal' to the animation wrapper
    const animationVariant =
      args.variant === 'small' ? 'horizontal' : args.variant;

    return (
      <div className="flex flex-col items-center gap-8 w-[800px] pt-10">
        <div className="h-[530px] w-full flex gap-10">
          <MultiStepper {...args} currentStep={currentStep} />
          <div className="mt-8">
            <AnimatePresence mode="wait">
              <MultiStepperAnimationWrapper
                key={currentStep}
                direction={direction}
                variant={animationVariant}
              >
                <div className="p-4 bg-slate-100 rounded-lg z-50 text-black">
                  <h3 className="text-lg font-medium">Step {currentStep}</h3>
                  <p className="text-sm text-gray-600">
                    This is the content for step {currentStep}
                  </p>
                </div>
              </MultiStepperAnimationWrapper>
            </AnimatePresence>
          </div>
        </div>
        <div className="flex gap-4">
          <button
            type="button"
            className="rounded-md bg-primary px-4 py-2 text-white disabled:opacity-50"
            onClick={handlePrevious}
            disabled={currentStep === 1}
          >
            Previous
          </button>
          <button
            type="button"
            className="rounded-md bg-primary px-4 py-2 text-white disabled:opacity-50"
            onClick={handleNext}
            disabled={currentStep === (args.steps?.length || 4)}
          >
            Next
          </button>
        </div>
        <div className="text-sm text-gray-500">
          Current Step: {currentStep} of {args.steps?.length || 4}
        </div>
      </div>
    );
  },
};
