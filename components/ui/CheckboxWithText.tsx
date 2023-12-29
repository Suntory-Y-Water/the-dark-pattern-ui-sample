'use client';

import { Checkbox } from '@/components/ui/checkbox';

interface CheckboxWithTextProps {
  id: string;
  label: string;
}

export function CheckboxWithText({ id, label }: CheckboxWithTextProps) {
  return (
    <div className='items-top flex space-x-2'>
      <Checkbox id={id} />
      <div className='grid gap-1.5 leading-none'>
        <label
          htmlFor={id}
          className='text-base leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
        >
          {label}
        </label>
      </div>
    </div>
  );
}
