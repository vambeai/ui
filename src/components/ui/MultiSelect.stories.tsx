import type { Meta, StoryObj } from '@storybook/react';
import { Mail, User, Users } from 'lucide-react';

import React from 'react';
import { useState } from 'react';
import { MultiSelect } from './multiselect';

const meta: Meta<typeof MultiSelect> = {
  title: 'UI/MultiSelect',
  component: MultiSelect,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'inverted'],
    },
    animation: {
      control: 'number',
    },
    maxCount: {
      control: 'number',
    },
    truncateAfter: {
      control: 'number',
    },
  },
};

export default meta;
type Story = StoryObj<typeof MultiSelect>;

const options = [
  { label: 'John Doe', value: 'john', icon: <User className="h-4 w-4" /> },
  { label: 'Jane Smith', value: 'jane', icon: <User className="h-4 w-4" /> },
  {
    label: 'Team Alpha',
    value: 'team-alpha',
    icon: <Users className="h-4 w-4" />,
  },
  { label: 'Support', value: 'support', icon: <Mail className="h-4 w-4" /> },
];

type MultiSelectWrapperProps = {
  options: {
    label: string;
    value: string;
    icon?: React.ReactNode;
  }[];
  placeholder?: string;
  variant?: 'default' | 'secondary' | 'destructive' | 'inverted' | null;
  animation?: number;
  maxCount?: number;
  truncateAfter?: number;
  startIcon?: React.ReactNode;
  className?: string;
  modalPopover?: boolean;
  asChild?: boolean;
};

// Wrapper component to demonstrate proper state management
const MultiSelectWithState = ({
  options,
  placeholder = 'Select options',
  variant = 'default',
  animation = 0,
  maxCount = 3,
  truncateAfter = 10,
  startIcon,
  className,
  modalPopover = false,
  asChild = false,
}: MultiSelectWrapperProps) => {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const handleValueChange = (values: string[]) => {
    setSelectedValues(values);
    console.log('Selected values:', values);
  };

  return (
    <MultiSelect
      options={options}
      placeholder={placeholder}
      variant={variant || 'default'}
      animation={animation}
      maxCount={maxCount}
      truncateAfter={truncateAfter}
      startIcon={startIcon}
      className={className}
      modalPopover={modalPopover}
      asChild={asChild}
      defaultValue={selectedValues}
      onValueChange={handleValueChange}
    />
  );
};

export const Default: Story = {
  render: (args) => <MultiSelectWithState {...args} />,
  args: {
    options,
    placeholder: 'Select users or teams',
  } as MultiSelectWrapperProps,
};

export const WithDefaultValues: Story = {
  render: (args) => <MultiSelectWithState {...args} />,
  args: {
    options,
    defaultValue: ['john', 'jane'],
    placeholder: 'Select users or teams',
  } as MultiSelectWrapperProps,
};

export const WithMaxCount: Story = {
  render: (args) => <MultiSelectWithState {...args} />,
  args: {
    options,
    maxCount: 2,
    placeholder: 'Select up to 2 items',
  } as MultiSelectWrapperProps,
};

export const WithAnimation: Story = {
  render: (args) => <MultiSelectWithState {...args} />,
  args: {
    options,
    animation: 0.5,
    placeholder: 'Select with animation',
  } as MultiSelectWrapperProps,
};

export const SecondaryVariant: Story = {
  render: (args) => <MultiSelectWithState {...args} />,
  args: {
    options,
    variant: 'secondary',
    placeholder: 'Select with secondary style',
  } as MultiSelectWrapperProps,
};

export const WithTruncation: Story = {
  render: (args) => <MultiSelectWithState {...args} />,
  args: {
    options: [
      ...options,
      {
        label: 'Very Long Team Name That Should Be Truncated',
        value: 'long-team',
        icon: <Users className="h-4 w-4" />,
      },
    ],
    truncateAfter: 15,
    placeholder: 'Select with truncated labels',
  } as MultiSelectWrapperProps,
};
