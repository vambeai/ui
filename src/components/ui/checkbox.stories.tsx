import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './checkbox';
import { Label } from './label';
import React from 'react';
const meta: Meta<typeof Checkbox> = {
  title: 'UI/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Checkbox {...args} id="terms" />
      <Label
        htmlFor="terms"
        className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </Label>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Checkbox {...args} id="terms" />
      <Label
        htmlFor="terms"
        className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </Label>
    </div>
  ),
};

export const WithLabel: Story = {
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Checkbox {...args} id="terms" />
      <Label
        htmlFor="terms"
        className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </Label>
    </div>
  ),
};
