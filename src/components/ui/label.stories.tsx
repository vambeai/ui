import type { Meta, StoryObj } from '@storybook/react';
import { Label } from './label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './select';

const meta: Meta<typeof Label> = {
  title: 'UI/Label',
  component: Label,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <input
        type="email"
        id="email"
        placeholder="Enter your email"
        className="rounded-md border border-input px-3 py-2"
      />
    </div>
  ),
};

export const WithSelect: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="fruit">Select a fruit</Label>
      <Select>
        <SelectTrigger id="fruit" className="w-[180px]">
          <SelectValue placeholder="Choose a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="orange">Orange</SelectItem>
          <SelectItem value="grape">Grape</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="disabled" className="opacity-70">
        Disabled Input
      </Label>
      <input
        type="text"
        id="disabled"
        disabled
        placeholder="This input is disabled"
        className="rounded-md border border-input px-3 py-2 opacity-70"
      />
    </div>
  ),
};
