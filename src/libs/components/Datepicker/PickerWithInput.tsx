import React, { FC, useEffect, useRef } from 'react';
import { useOnClickOutside } from '../../hooks';
import { FormItemProps } from '../types';
import { Calendar } from './Calendar';
import { useDateContext } from './useDateContext';

type PickerWithInputProps = {
  onChange?: (value: Date) => void;
} & Omit<FormItemProps, 'value' | 'type' | 'className' | 'messageType' | 'readOnly' | 'onChange' | 'onFocus'>;

export const PickerWithInput: FC<PickerWithInputProps> = (props) => {
  const { label, srOnly, message, onChange, ...rest } = props;
  const { selectedDate, isCalendarOpen, setIsCalendarOpen } = useDateContext();
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () => setIsCalendarOpen(false));

  useEffect(() => {
    if (selectedDate && onChange) {
      onChange(selectedDate);
    }
  }, [onChange, selectedDate]);

  return (
    <div ref={ref} className="datepicker form-group">
      <label className={`form-group__label${srOnly ? ' sr-only' : ''}`} htmlFor={rest.name || ''}>
        {label}
      </label>
      <input
        readOnly
        type="text"
        className={`form-group__input ${message?.value ? message?.variant || 'danger' : ''}`}
        value={selectedDate.toDateString()}
        onFocus={() => setIsCalendarOpen(true)}
        {...rest}
      />
      {message?.value && <p className={`form-group__message ${message?.variant || 'danger'}`}>{message?.value}</p>}
      {isCalendarOpen && <Calendar />}
    </div>
  );
};
