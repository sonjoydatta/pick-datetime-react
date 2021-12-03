import { useOnClickOutside } from '../../hooks';
import { FC, useEffect, useRef } from 'react';
import { Form } from '../Form';
import { FormItemProps } from '../Form/types';
import { Calendar } from './Calendar';
import { CalendarWrapper } from './styles';
import { useDateContext } from './useDateContext';

type PickerWithInputProps = {
  onChange?: (value: Date) => void;
} & Omit<FormItemProps, 'value' | 'type' | 'readOnly' | 'onChange' | 'onFocus'>;

export const PickerWithInput: FC<PickerWithInputProps> = (props) => {
  const { label, srOnly, onChange, ...rest } = props;
  const { selectedDate, isCalendarOpen, setIsCalendarOpen } = useDateContext();
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () => setIsCalendarOpen(false));

  useEffect(() => {
    if (selectedDate && onChange) {
      onChange(selectedDate);
    }
  }, [onChange, selectedDate]);

  return (
    <Form.Group ref={ref}>
      <Form.Label srOnly={srOnly}>{label}</Form.Label>
      <Form.Input
        type="text"
        readOnly
        value={selectedDate.toDateString()}
        onFocus={() => setIsCalendarOpen(true)}
        {...rest}
      />
      <CalendarWrapper>{isCalendarOpen && <Calendar />}</CalendarWrapper>
    </Form.Group>
  );
};
