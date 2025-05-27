import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './tabs';
import React from 'react';

const meta: Meta<typeof Tabs> = {
  title: 'UI/Tabs',
  component: Tabs,

  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {
    orientation: 'horizontal',
  },
  render: (args) => (
    <Tabs defaultValue="account" className="w-[400px]" {...args}>
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <div className="p-4">
          <h3 className="text-lg font-medium">Account Settings</h3>
          <p className="text-sm text-muted-foreground">
            Make changes to your account settings.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="password">
        <div className="p-4">
          <h3 className="text-lg font-medium">Password Settings</h3>
          <p className="text-sm text-muted-foreground">
            Change your password here.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  ),
};

export const VambeVariant: Story = {
  render: () => (
    <Tabs defaultValue="overview" className="w-[400px]">
      <TabsList variant="vambe">
        <TabsTrigger value="overview" variant="vambe">
          Overview
        </TabsTrigger>
        <TabsTrigger value="analytics" variant="vambe">
          Analytics
        </TabsTrigger>
        <TabsTrigger value="reports" variant="vambe">
          Reports
        </TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <div className="p-4">
          <h3 className="text-lg font-medium">Overview</h3>
          <p className="text-sm text-muted-foreground">
            View your dashboard overview.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="analytics">
        <div className="p-4">
          <h3 className="text-lg font-medium">Analytics</h3>
          <p className="text-sm text-muted-foreground">
            View your analytics data.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="reports">
        <div className="p-4">
          <h3 className="text-lg font-medium">Reports</h3>
          <p className="text-sm text-muted-foreground">View your reports.</p>
        </div>
      </TabsContent>
    </Tabs>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Tabs defaultValue="active" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="active">Active</TabsTrigger>
        <TabsTrigger value="disabled" disabled>
          Disabled
        </TabsTrigger>
      </TabsList>
      <TabsContent value="active">
        <div className="p-4">
          <h3 className="text-lg font-medium">Active Tab</h3>
          <p className="text-sm text-muted-foreground">
            This tab is active and clickable.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="disabled">
        <div className="p-4">
          <h3 className="text-lg font-medium">Disabled Tab</h3>
          <p className="text-sm text-muted-foreground">
            This tab is disabled and cannot be clicked.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  ),
};

export const Vertical: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-full flex" orientation="vertical">
      <TabsList>
        <TabsTrigger value="account" variant="sidebar">
          Account
        </TabsTrigger>
        <TabsTrigger value="password" variant="sidebar">
          Password
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <div className="p-4">
          <h3 className="text-lg font-medium">Account Settings</h3>
        </div>
      </TabsContent>
      <TabsContent value="password">
        <div className="p-4">
          <h3 className="text-lg font-medium">Password Settings</h3>
        </div>
      </TabsContent>
    </Tabs>
  ),
};
