import type { Meta, StoryObj } from '@storybook/react';
import { Globe } from 'lucide-react';
import { useState } from 'react';
import type { ComponentProps } from 'react';
import { Combobox } from './comboBox';
import React from 'react';

const meta: Meta<typeof Combobox> = {
  title: 'UI/Combobox',
  component: Combobox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Combobox>;

const frameworks = [
  { value: 'next.js', label: 'Next.js' },
  { value: 'sveltekit', label: 'SvelteKit' },
  { value: 'nuxt', label: 'Nuxt.js' },
  { value: 'remix', label: 'Remix' },
  { value: 'astro', label: 'Astro' },
];

type ComboboxProps = ComponentProps<typeof Combobox>;

const ComboboxWithState = (
  args: Omit<ComboboxProps, 'value' | 'setValue'> & { value: string },
) => {
  const [value, setValue] = useState(args.value);
  return <Combobox {...args} value={value} setValue={setValue} />;
};

export const Default: Story = {
  render: (args) => <ComboboxWithState {...args} value="" />,
  args: {
    value: '',
    options: frameworks,
    placeholder: 'Select framework...',
  },
};

export const WithInitialValue: Story = {
  render: (args) => <ComboboxWithState {...args} value="next.js" />,
  args: {
    value: 'next.js',
    options: frameworks,
    placeholder: 'Select framework...',
  },
};

export const WithIcon: Story = {
  render: (args) => <ComboboxWithState {...args} value="" />,
  args: {
    value: '',
    options: frameworks,
    placeholder: 'Select framework...',
    initialIcon: <Globe className="h-4 w-4" />,
    TriggerClassName: 'w-20',
  },
};

export const CustomWidth: Story = {
  render: (args) => <ComboboxWithState {...args} value="" />,
  args: {
    value: '',
    options: frameworks,
    placeholder: 'Select framework...',
    TriggerClassName: 'min-w-[300px]',
  },
};
