import type { Meta, StoryObj } from '@storybook/react';
import { Moon, Sun } from 'lucide-react';
import { Toggle } from './toggle';
import React from 'react';

const meta: Meta<typeof Toggle> = {
  title: 'UI/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outline', 'primary'],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  args: {
    children: 'Toggle',
  },
};

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <Sun className="h-4 w-4" />
        Toggle
      </>
    ),
  },
};

export const IconOnly: Story = {
  args: {
    children: <Moon className="h-4 w-4" />,
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline Toggle',
  },
};

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Toggle',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small Toggle',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large Toggle',
  },
};
