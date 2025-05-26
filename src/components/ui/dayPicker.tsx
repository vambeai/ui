'use client';

import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { Calendar as CalendarIcon } from 'lucide-react';
import * as React from 'react';

import { Button } from '@ui/components/ui/button';
import { Calendar } from '@ui/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@ui/components/ui/popover';
import { cn } from '@ui/lib/utils';
import type { Matcher } from 'react-day-picker';

export function DatePicker({
  onSelect,
  disabledDates,
}: {
  onSelect: (date: Date | undefined) => void;
  disabledDates?: Matcher[];
}) {
  const [date, setDate] = React.useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'min-w-[280px] justify-start text-left font-normal w-full rounded-md text-foreground',
            !date && 'text-muted-foreground',
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? (
            format(date, 'PPP', { locale: es })
          ) : (
            <span>Seleccionar fecha</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(day) => {
            setDate(day);
            onSelect(day);
          }}
          initialFocus
          fromYear={1960}
          toYear={new Date().getFullYear()}
          captionLayout="dropdown"
          locale={es}
          disabled={disabledDates}
        />
      </PopoverContent>
    </Popover>
  );
}
