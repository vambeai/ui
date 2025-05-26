'use client';

import { cn } from '@ui/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export interface DayObject {
  date: Date;
  showDot: boolean;
}

interface DayPickerProps {
  onDateSelect: (date: Date) => void;
  selectedDate?: Date;
  days: DayObject[];
  handlePrevious: () => void;
  handleNext: () => void;
  disableDate?: boolean;
}

const formatDayName = (date: Date) => {
  const days = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
  return days[date.getDay()];
};

const DayButton = ({
  date,
  isSelected,
  onDateSelect,
  showDot = true,
  disableDate = false,
}: {
  date: Date;
  isSelected: boolean;
  onDateSelect: (date: Date) => void;
  showDot?: boolean;
  disableDate?: boolean;
}) => {
  const isToday = date.toDateString() === new Date().toDateString();

  return (
    <button
      onClick={() => onDateSelect(date)}
      className={cn(
        'flex flex-col items-center justify-center py-2 px-1 lg:px-4 rounded-full transition-colors w-10 md:w-14 disabled:opacity-50 disabled:cursor-not-allowed',
        isSelected
          ? 'bg-primary text-primary-foreground'
          : 'text-gray-600 hover:bg-gray-100 disabled:hover:bg-transparent dark:text-gray-400 dark:hover:bg-gray-900',
      )}
      type="button"
      disabled={!showDot && disableDate}
    >
      <span className="text-sm font-medium">{formatDayName(date)}</span>
      <span
        className={cn(
          'text-xl font-semibold',
          isToday && !isSelected && 'text-primary',
        )}
      >
        {date.getDate()}
      </span>
      <span
        className={cn(
          'h-[7px] w-[7px] mt-1 rounded-full',
          !isSelected ? 'bg-primary' : 'bg-white',
          showDot ? 'opacity-100' : 'opacity-0',
        )}
      />
    </button>
  );
};

export function HorizontalDayPicker({
  onDateSelect,
  selectedDate = new Date(),
  days,
  handlePrevious,
  handleNext,
  disableDate = false,
}: DayPickerProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const isSelectedDate = (date: Date) => {
    return (
      selectedDate &&
      date.getDate() === selectedDate.getDate() &&
      date.getMonth() === selectedDate.getMonth() &&
      date.getFullYear() === selectedDate.getFullYear()
    );
  };

  const today = new Date();

  return (
    <div className="w-full">
      <div className="flex items-center justify-center mb-4">
        <button
          onClick={handlePrevious}
          disabled={days.some((day) => day.date < today)}
          className="p-2 text-gray-500 hover:text-gray-700 disabled:opacity-50 hover:bg-gray-100 rounded-md"
          aria-label="Previous day"
          type="button"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div
          ref={scrollContainerRef}
          className="flex space-x-1 lg:space-x-2 overflow-hidden "
        >
          {days.map((dayObject) => (
            <DayButton
              key={dayObject.date.toISOString()}
              date={dayObject.date}
              isSelected={isSelectedDate(dayObject.date)}
              onDateSelect={onDateSelect}
              showDot={dayObject.showDot}
              disableDate={disableDate}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="p-2 text-gray-500 hover:text-gray-700 disabled:opacity-40 hover:bg-gray-100 rounded-md disabled:cursor-not-allowed"
          aria-label="Next day"
          type="button"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
