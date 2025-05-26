import { cn } from '@ui/lib/utils';
import { motion } from 'motion/react';
import type { ReactNode } from 'react';
import React from 'react';
interface Step {
  number: number;
  icon?: ReactNode;
}

interface StepsProps {
  steps?: Step[];
  totalSteps?: number;
  currentStep: number;
  className?: string;
  variant?: 'vertical' | 'horizontal' | 'small';
}

export const MultiStepper = ({
  steps = [],
  totalSteps = 0,
  currentStep,
  className,
  variant = 'vertical',
}: StepsProps) => {
  if (variant === 'small') {
    return (
      <div className="flex items-center justify-center gap-1">
        {Array.from({ length: totalSteps }).map((_, index) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          <React.Fragment key={index}>
            {/* Step indicator */}
            <div
              className={cn(
                'cursor-pointer transition-all duration-300 ease-in-out',
                index === currentStep
                  ? 'bg-primary w-10 h-[14px] rounded-full'
                  : 'bg-slate-200 w-[14px] h-[14px] rounded-full',
              )}
            />
          </React.Fragment>
        ))}
      </div>
    );
  }
  const isVertical = variant === 'vertical';
  return (
    <div
      className={cn('relative', isVertical ? 'h-[530px]' : 'w-full', className)}
    >
      {/* Container for line and dots with fixed spacing */}
      <div
        className={cn(
          'relative flex',
          isVertical
            ? 'h-full flex-col items-center'
            : 'w-full items-center h-10',
        )}
      >
        {/* Line background */}
        <div
          className={cn(
            'absolute bg-slate-300',
            isVertical
              ? 'left-1/2 h-full w-[2px] -translate-x-1/2 transform'
              : 'top-1/2 h-[2px] w-full -translate-y-1/2 transform',
          )}
        />

        {/* Animated fill line */}
        <div
          className={cn(
            'absolute bg-primary transition-all duration-500 ease-in-out',
            isVertical
              ? 'left-1/2 w-[2px] -translate-x-1/2 transform'
              : 'top-1/2 h-[2px] -translate-y-1/2 transform',
          )}
          style={{
            [isVertical ? 'height' : 'width']: `${
              ((currentStep - 1) / (steps.length - 1)) * 100
            }%`,
          }}
        />

        {/* Steps with absolute positioning */}
        {steps.map((step, index) => (
          <div
            key={step.number}
            className={cn(
              'absolute flex flex-col items-center',
              isVertical ? 'left-0 right-0' : 'top-0 bottom-0',
            )}
            style={{
              [isVertical ? 'top' : 'left']: `${
                (index / (steps.length - 1)) * 100
              }%`,
              transform: isVertical ? 'translateY(-50%)' : 'translateX(-50%)',
            }}
          >
            <div
              className={cn(
                'flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium transition-all duration-200 aspect-square',
                currentStep >= step.number
                  ? 'bg-primary text-white'
                  : 'bg-slate-300 text-white',
              )}
            >
              {step.icon || step.number}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const stepAnimationVariants = {
  enterForward: {
    horizontal: { opacity: 0, x: 50 },
    vertical: { opacity: 0, y: 50 },
  },
  enterBackward: {
    horizontal: { opacity: 0, x: -50 },
    vertical: { opacity: 0, y: -50 },
  },
  center: { horizontal: { opacity: 1, x: 0 }, vertical: { opacity: 1, y: 0 } },
  exitForward: {
    horizontal: { opacity: 0, x: -50 },
    vertical: { opacity: 0, y: -50 },
  },
  exitBackward: {
    horizontal: { opacity: 0, x: 50 },
    vertical: { opacity: 0, y: 50 },
  },
};

export function MultiStepperAnimationWrapper({
  children,
  direction,
  className,
  variant = 'vertical',
  keyString,
}: {
  children: React.ReactNode;
  direction: 'forward' | 'backward';
  variant?: 'horizontal' | 'vertical';
  className?: string;
  keyString: string;
}) {
  return (
    <motion.div
      key={keyString}
      initial="enter"
      animate="center"
      exit="exit"
      variants={{
        enter: () =>
          direction === 'forward'
            ? stepAnimationVariants.enterForward[variant]
            : stepAnimationVariants.enterBackward[variant],
        center: stepAnimationVariants.center[variant],
        exit: () =>
          direction === 'forward'
            ? stepAnimationVariants.exitForward[variant]
            : stepAnimationVariants.exitBackward[variant],
      }}
      transition={{ duration: 0.3 }}
      className={cn(
        'flex h-full w-full items-center justify-center',
        className,
      )}
    >
      {children}
    </motion.div>
  );
}
