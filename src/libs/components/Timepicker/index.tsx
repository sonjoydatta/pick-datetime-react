import { useOnClickOutside } from '../../hooks';
import React, { FC, useRef, useState } from 'react';
import { Form } from '../Form';
import { FormItemProps } from '../Form/types';
import { convertTo12Hours, convertTo24Hours, findNearestSlot } from '../../helpers/time';
import { TimeSlots, TimeSlotsProps } from './TimeSlots';

export type TimepickerProps = {
  value?: string;
  format?: '12' | '24';
} & Partial<Omit<TimeSlotsProps, 'selectedTime'>> &
  Omit<FormItemProps, 'value' | 'type' | 'readOnly' | 'messageType' | 'onChange' | 'onFocus'>;

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
    <Form.Group ref={ref} style={{ position: 'relative' }}>
      <Form.Label srOnly={srOnly}>{label}</Form.Label>
      <Form.Input
        type="text"
        readOnly
        messageType={message?.value ? message?.variant || 'danger' : undefined}
        value={selectedTime}
        onFocus={() => setIsOpen(true)}
        {...rest}
      />
      {message && <Form.Message variant={message.variant}>{message.value}</Form.Message>}
      {isOpen && <TimeSlots {...slotProps} />}
    </Form.Group>
  );
};
