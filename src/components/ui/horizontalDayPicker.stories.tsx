import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { HorizontalDayPicker } from './horizontalDayPicker';

const meta: Meta<typeof HorizontalDayPicker> = {
  title: 'UI/HorizontalDayPicker',
  component: HorizontalDayPicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof HorizontalDayPicker>;

// Helper function to generate days
const generateDays = (count: number) => {
  const days = [];
  const today = new Date();
  for (let i = 0; i < count; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    days.push({
      date,
      showDot: Math.random() > 0.5, // Randomly show dots for demo
    });
  }
  return days;
};

// Controlled state example
const ControlledExample = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [days, setDays] = useState(generateDays(5));

  const handlePrevious = () => {
    const newDays = days.map((day) => {
      const newDate = new Date(day.date);
      newDate.setDate(newDate.getDate() - 1);
      return { ...day, date: newDate };
    });
    setDays(newDays);
  };

  const handleNext = () => {
    const newDays = days.map((day) => {
      const newDate = new Date(day.date);
      newDate.setDate(newDate.getDate() + 1);
      return { ...day, date: newDate };
    });
    setDays(newDays);
  };

  return (
    <HorizontalDayPicker
      onDateSelect={setSelectedDate}
      selectedDate={selectedDate}
      days={days}
      handlePrevious={handlePrevious}
      handleNext={handleNext}
    />
  );
};

export const Default: Story = {
  render: () => <ControlledExample />,
};

export const MoreDays: Story = {
  args: {
    onDateSelect: (date) => console.log('Selected date:', date),
    selectedDate: new Date(),
    days: generateDays(7),
    handlePrevious: () => console.log('Previous clicked'),
    handleNext: () => console.log('Next clicked'),
  },
};
