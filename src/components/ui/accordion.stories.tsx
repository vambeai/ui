import type { Meta, StoryObj } from '@storybook/react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './accordion';

const meta: Meta<typeof Accordion> = {
  title: 'UI/Accordion',
  component: Accordion,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  render: () => (
    <Accordion type="single" collapsible className="w-full space-y-4">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const Multiple: Story = {
  render: () => (
    <Accordion type="multiple" className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Can I open multiple items?</AccordionTrigger>
        <AccordionContent>
          Yes. This accordion allows multiple items to be open at the same time.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it customizable?</AccordionTrigger>
        <AccordionContent>
          Yes. You can customize the appearance using the className prop.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it responsive?</AccordionTrigger>
        <AccordionContent>
          Yes. It works well on all screen sizes.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const CustomStyling: Story = {
  render: () => (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem
        value="item-1"
        className="border-2 border-blue-500 rounded-lg mb-4"
      >
        <AccordionTrigger className="px-4 text-blue-500">
          Custom Styled Item
        </AccordionTrigger>
        <AccordionContent className="px-4 text-gray-600">
          This accordion item has custom styling applied to it.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="item-2"
        className="border-2 border-green-500 rounded-lg"
      >
        <AccordionTrigger className="px-4 text-green-500">
          Another Custom Item
        </AccordionTrigger>
        <AccordionContent className="px-4 text-gray-600">
          Each item can have its own unique styling.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
