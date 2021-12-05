import React, { FC, useRef, useState } from 'react';
import { convertTo12Hours, convertTo24Hours, findNearestSlot } from '../../helpers/time';
import { useOnClickOutside } from '../../hooks';
import '../styles/form.css';
import '../styles/timepicker.css';
import { FormItemProps } from '../types';
import { TimeSlots, TimeSlotsProps } from './TimeSlots';

export type TimepickerProps = {
  value?: string;
  format?: '12' | '24';
} & Partial<Omit<TimeSlotsProps, 'selectedTime'>> &
  Omit<FormItemProps, 'value' | 'type' | 'className' | 'readOnly' | 'messageType' | 'onChange' | 'onFocus'>;

export const Timepicker: FC<TimepickerProps> = (props) => {
  const { srOnly, label, message, value, format, slotGap, rightAlign, startFrom, onChange, ...rest } = props;

  const getDefaultValue = () => {
    if (value) {
      if (format === '12') {
        return convertTo12Hours(value);
      }
      return value;
    }
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    return findNearestSlot(hours, minutes, slotGap);
  };

  const [selectedTime, setSelectedTime] = useState(getDefaultValue());
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () => setIsOpen(false));

  const getStartFrom = () => {
    if (startFrom) {
      const converted = format === '24' ? startFrom : convertTo24Hours(startFrom);
      const convertedArr = converted.split(':');
      const hours = parseInt(convertedArr[0], 10);
      const minutes = parseInt(convertedArr[1], 10);
      return findNearestSlot(hours, minutes, slotGap);
    }
    return undefined;
  };

  const handleTimeChange = (time: string) => {
    setSelectedTime(time);
    setIsOpen(false);
    onChange && onChange(format === '24' ? convertTo24Hours(time) : time);
  };

  const slotProps = {
    selectedTime,
    slotGap,
    rightAlign,
    startFrom: getStartFrom(),
    onChange: handleTimeChange,
  };

  return (
    <div ref={ref} className="timepicker form-group">
      <label className={`form-group__label${srOnly ? ' sr-only' : ''}`} htmlFor={rest.name || ''}>
        {label}
      </label>
      <input
        readOnly
        type="text"
        className={`form-group__input ${message?.value ? message?.variant || 'danger' : ''}`}
        value={selectedTime}
        onFocus={() => setIsOpen(true)}
        {...rest}
      />
      {message?.value && <p className={`form-group__message ${message?.variant || 'danger'}`}>{message?.value}</p>}
      {isOpen && <TimeSlots {...slotProps} />}
    </div>
  );
};
