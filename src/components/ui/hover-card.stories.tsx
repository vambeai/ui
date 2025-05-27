import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from './hover-card';

const meta: Meta<typeof HoverCard> = {
  title: 'UI/HoverCard',
  component: HoverCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof HoverCard>;

export const Default: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger className="text-sm font-medium underline underline-offset-4">
        Hover me
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="space-y-2">
          <h4 className="text-sm font-semibold">Hover Card Title</h4>
          <p className="text-sm text-muted-foreground">
            This is a hover card component that shows additional information
            when you hover over the trigger.
          </p>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};

export const WithCustomContent: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger className="text-sm font-medium underline underline-offset-4">
        Custom Content
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">Custom Layout</h4>
            <p className="text-sm text-muted-foreground">
              This example shows how to create a custom layout within the hover
              card.
            </p>
            <div className="flex items-center pt-2">
              <span className="text-xs text-muted-foreground">Joined 2024</span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};
