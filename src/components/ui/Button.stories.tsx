import type { Meta, StoryObj } from '@storybook/react';
import { ChevronRightCircle } from 'lucide-react';
import React from 'react';
import { Button } from './button';

const meta = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    variant: {
      control: 'select',
      options: [
        'default',
        'outline',
        'secondary',
        'ghost',
        'link',
        'danger-secondary',
        'danger',
      ],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Button',
  },
};

export const Primary: Story = {
  args: {
    variant: 'default',
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline Button',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost Button',
    disabled: true,
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Link Button',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large Button',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small Button',
  },
};

export const Icon: Story = {
  args: {
    size: 'icon',
    children: <ChevronRightCircle className="w-4 h-4" />,
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    children: 'Danger Button',
  },
};

export const Muted: Story = {
  args: {
    variant: 'muted',
    children: 'Muted Button',
  },
};

export const DangerSecondary: Story = {
  args: {
    variant: 'danger-secondary',
    children: 'Danger Secondary Button',
  },
};

// Render all variants
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col space-y-4">
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="danger-secondary">Danger Secondary</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
};

// Render all sizes
export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col space-y-4">
      <Button size="default">Default Size</Button>
      <Button size="sm">Small Size</Button>
      <Button size="lg">Large Size</Button>
      <Button size="icon">
        <ChevronRightCircle className="w-4 h-4" />
      </Button>
    </div>
  ),
};
