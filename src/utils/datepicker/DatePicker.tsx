'use client';
import * as React from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';

import { cn } from '../shadcn-ui/lib/utils';
import { Button } from '../shadcn-ui/components/button/button';
import { Calendar } from '../shadcn-ui/components/calendar/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '../shadcn-ui/components/popover/popover';

type Props = {
  due_date: Date | undefined;
  setDueDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
  className?: string;
  dark_mode: boolean;
};

const DatePicker: React.FC<Props> = ({
  due_date,
  setDueDate,
  className,
  dark_mode,
}: Props): React.ReactElement => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const hadleSelect = (date: Date): void => {
    setDueDate(date);
    setIsOpen(false);
  };

  return (
    <Popover onOpenChange={setIsOpen} open={isOpen}>
      <PopoverTrigger className="bg-orange-300" asChild>
        <Button
          variant={'ghost'}
          className={cn(
            'w-[280px] justify-start text-left font-normal',
            !due_date && 'text-muted-foreground',
            className,
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {due_date ? format(due_date, 'PPP') : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className={`w-auto p-0 ${dark_mode ? `bg-slate-700 border-slate-600` : `bg-white`}`}
      >
        <Calendar
          mode="single"
          selected={due_date}
          onSelect={(date: Date | undefined): void => hadleSelect(date ?? new Date())}
          initialFocus
          classNames={
            dark_mode
              ? {
                  caption:
                    'flex font-[Lexend] text-white justify-center pt-1 relative items-center',
                  head_cell:
                    'text-muted-foreground rounded-md w-8 font-[Lexend] font-light text-[0.8rem] text-white',
                  day: cn(
                    'h-8 w-8 p-0 font-[Lexend] font-light text-white rounded hover:bg-gray-500',
                    due_date && 'aria-selected:opacity-100',
                  ),
                  day_selected: 'bg-gray-600 text-slate-800 focus:bg-gray-600',
                  day_today: 'border border-gray-500',
                  day_disabled: 'text-slate-600 hover:bg-transparent',
                }
              : {
                  caption: 'flex font-[Lexend] justify-center pt-1 relative items-center',
                  head_cell:
                    'text-muted-foreground rounded-md w-8 font-[Lexend] font-light text-[0.8rem]',
                  day: cn(
                    'h-8 w-8 p-0 font-[Lexend] font-light rounded hover:bg-gray-100',
                    due_date && 'aria-selected:opacity-100',
                  ),
                  day_selected: 'bg-gray-700 text-white hover:bg-gray-700',
                  day_today: 'border border-gray-500',
                  day_disabled: 'text-gray-300 hover:bg-transparent',
                }
          }
          disabled={(date: Date): boolean => date < new Date(Date.now() - 86400000)}
        />
      </PopoverContent>
    </Popover>
  );
};

export default DatePicker;
