import type { Meta, StoryObj } from '@storybook/react';
import { PhoneInput } from './phone-input';

const meta: Meta<typeof PhoneInput> = {
  title: 'UI/PhoneInput',
  component: PhoneInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'text',
      description: 'The phone number value',
    },
    onChange: {
      action: 'changed',
      description: 'Callback when the phone number changes',
    },
    className: {
      control: 'text',
      description: 'Additional classes for the container',
    },
    inputClassName: {
      control: 'text',
      description: 'Additional classes for the input element',
    },
  },
};

export default meta;
type Story = StoryObj<typeof PhoneInput>;

export const Default: Story = {
  args: {
    value: '',
    placeholder: 'Enter phone number',
  },
};

export const WithValue: Story = {
  args: {
    value: '+56912345678',
    placeholder: 'Enter phone number',
  },
};

export const Disabled: Story = {
  args: {
    value: '+56912345678',
    disabled: true,
    placeholder: 'Enter phone number',
  },
};

export const WithCustomClassName: Story = {
  args: {
    value: '',
    className: 'w-[300px]',
    inputClassName: 'bg-gray-100',
    placeholder: 'Enter phone number',
  },
};

export const WithError: Story = {
  args: {
    value: '',
    className: 'w-[300px]',
    inputClassName: 'border-red-500 focus-visible:ring-red-500',
    placeholder: 'Enter phone number',
  },
};
