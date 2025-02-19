import * as React from 'react';
import { CheckIcon } from '@radix-ui/react-icons';
import { Column } from '@tanstack/react-table';
import { cn } from '../../lib/utils';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '../../components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '../../components/ui/popover';
import { Separator } from '../../components/ui/separator';
import { CalendarIcon, ListFilter } from 'lucide-react';
import { addDays, format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { DateRange } from 'react-day-picker';

export type Option = {
  label: string;
  value: string;
  icon?: React.ComponentType<{ className?: string }>;
};

interface DataTableFacetedFilterProps<TData, TValue> {
  column?: Column<TData, TValue>;
  title?: string;
  options: Option[];
  type?: string;
  disabled?: boolean;
}

export function DataTableFacetedFilter<TData, TValue>({
  column,
  title,
  options,
  type = 'select',
  disabled = false,
}: DataTableFacetedFilterProps<TData, TValue>) {
  const [facets, setFacets] = React.useState(column?.getFacetedUniqueValues());
  const [selectedValues, setSelectedValues] = React.useState(
    new Set(column?.getFilterValue() as string[]),
  );
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2024, 9, 27),
    to: addDays(new Date(2024, 9, 25), 20),
  });

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="h-8 border-dashed flex items-center"
          disabled={disabled}
        >
          <ListFilter className="mr-2 h-4 w-4" />
          {title}
          {selectedValues?.size > 0 && (
            <>
              <Separator orientation="vertical" className="mx-2 h-4" />
              <Badge className="rounded-sm px-1 font-normal bg-zinc-100 text-zinc-950 hover:bg-zinc-200">
                {selectedValues.size > 1
                  ? `${selectedValues.size} filtros`
                  : `${selectedValues.size} filtro`}
              </Badge>
            </>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-fit p-0" align="start">
        {type === 'select' && (
          <Command>
            <CommandInput placeholder={`Filtrar ${title?.toLowerCase()}`} />
            <CommandList>
              <CommandEmpty>Sem resultados.</CommandEmpty>

              <CommandGroup>
                {options
                  .filter(
                    (option, index, self) =>
                      index == self.findIndex((t) => t.value === option.value),
                  )
                  .map((option) => {
                    const isSelected = selectedValues.has(option.value);
                    return (
                      <CommandItem
                        key={option.value}
                        onSelect={() => {
                          if (isSelected) {
                            selectedValues.delete(option.value);
                          } else {
                            selectedValues.add(option.value);
                          }
                          setSelectedValues(new Set(selectedValues));
                          const filterValues = Array.from(selectedValues);

                          column?.setFilterValue(
                            filterValues.length ? filterValues : undefined,
                          );
                        }}
                      >
                        <div
                          className={cn(
                            'mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary cursor-pointer',
                            isSelected
                              ? 'bg-primary text-primary-foreground'
                              : 'opacity-50 [&_svg]:invisible',
                          )}
                        >
                          <CheckIcon className={cn('h-4 w-4')} />
                        </div>
                        {option.icon && (
                          <option.icon className="mr-2 h-4 w-4 text-muted-foreground" />
                        )}
                        <span className={'max-w-96'}>{option.label}</span>
                        {facets?.get(option.value) && (
                          <span className="ml-auto flex h-4 w-4 items-center justify-center font-mono text-xs">
                            {facets.get(option.value)}
                          </span>
                        )}
                      </CommandItem>
                    );
                  })}
              </CommandGroup>
              {selectedValues.size > 0 && (
                <>
                  <CommandSeparator />
                  <CommandGroup>
                    <CommandItem
                      onSelect={() => {
                        column?.setFilterValue(undefined);
                        setSelectedValues(new Set());
                      }}
                      className="justify-center text-center"
                    >
                      Limpar filtros
                    </CommandItem>
                  </CommandGroup>
                </>
              )}
            </CommandList>
          </Command>
        )}
        {type === 'date' && (
          <div className="m-1 w-[300px]">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  id="date"
                  variant={'outline'}
                  className={cn(
                    'w-[300px] justify-start text-left font-normal',
                    !date && 'text-muted-foreground',
                  )}
                >
                  <CalendarIcon />
                  {date?.from ? (
                    date.to ? (
                      <div className="flex gap-2">
                        <span className="ml-3 first-letter:uppercase">
                          {format(date.from, 'LLL dd, y', {
                            locale: ptBR,
                          })}
                        </span>
                        <span>-</span>
                        <span className="first-letter:uppercase">
                          {format(date.to, 'LLL dd, y', {
                            locale: ptBR,
                          })}
                        </span>
                      </div>
                    ) : (
                      format(date.from, 'LLL dd, y')
                    )
                  ) : (
                    <span>Pick a date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <CalendarShadCN
                  initialFocus
                  mode="range"
                  defaultMonth={date?.from}
                  selected={date}
                  onSelect={setDate}
                  numberOfMonths={2}
                />
              </PopoverContent>
            </Popover>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
}
