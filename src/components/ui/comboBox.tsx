'use client';

import { Check, ChevronDown } from 'lucide-react';
import * as React from 'react';

import { Button } from '@ui/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@ui/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@ui/components/ui/popover';
import { cn } from '@ui/lib/utils';

interface ComboboxProps {
  value: string | undefined;
  setValue: (value: string) => void;
  options: { value: string; label: string }[];
  placeholder: string;
  TriggerClassName?: string;
  initialIcon?: React.ReactNode;
  searchPlaceholder?: string;
  emptyMessage?: string;
  onClearSelected?: () => void;
  disabled?: boolean;
}

export function Combobox({
  value,
  setValue,
  options,
  placeholder,
  searchPlaceholder = 'Search...',
  TriggerClassName,
  initialIcon,
  emptyMessage = 'No results found.',
  disabled = false,
  onClearSelected,
  ...props
}: ComboboxProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn(
            'min-w-[200px] gap-2 w-full h-10 bg-background px-3 py-2 text-foreground hover:text-foreground focus-visible:text-foreground ',
            TriggerClassName,
            disabled &&
              'opacity-50 cursor-not-allowed dark:bg-background/75 dark:border-1 dark:!border-border',
          )}
          disabled={disabled}
        >
          {initialIcon}
          {value ? (
            <span className="text-foreground font-normal max-w-[90%] truncate">
              {options.find((option) => option.value === value)?.label ||
                placeholder}
            </span>
          ) : (
            <span className="text-muted-foreground font-normal text-placeholder">
              {placeholder}
            </span>
          )}
          <ChevronDown className="ml-auto h-4 w-4 shrink-0 opacity-50 text-muted-foreground" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0">
        <Command>
          <CommandInput placeholder={searchPlaceholder} className="h-10" />
          <CommandList>
            <CommandEmpty>{emptyMessage}</CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.value}
                  onSelect={(currentValue) => {
                    if (currentValue === value) {
                      onClearSelected?.();
                      setValue('');
                    } else {
                      setValue(currentValue);
                    }
                    setOpen(false);
                  }}
                  className={cn(
                    value === option.value &&
                      'data-[selected]:bg-secondary data-[selected]:text-primary',
                    'my-1 ',
                  )}
                >
                  <Check
                    className={cn(
                      'h-4 w-4',
                      value === option.value ? 'opacity-100' : 'opacity-0',
                    )}
                  />
                  {option.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export default Combobox;
