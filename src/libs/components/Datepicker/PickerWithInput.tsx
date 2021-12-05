import { useOnClickOutside } from '../../hooks';
import React, { FC, useEffect, useRef } from 'react';
import { Form } from '../Form';
import { FormItemProps } from '../Form/types';
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
    <Form.Group ref={ref} className="datepicker" style={{ position: 'relative' }}>
      <Form.Label srOnly={srOnly} className="datepicker-label">
        {label}
      </Form.Label>
      <Form.Input
        type="text"
        readOnly
        className="datepicker-input"
        messageType={message?.value ? message?.variant || 'danger' : undefined}
        value={selectedDate.toDateString()}
        onFocus={() => setIsCalendarOpen(true)}
        {...rest}
      />
      {message && (
        <Form.Message variant={message.variant} className="datepicker-message">
          {message.value}
        </Form.Message>
      )}
      {isCalendarOpen && <Calendar />}
    </Form.Group>
  );
};
