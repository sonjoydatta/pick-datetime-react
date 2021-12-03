import { useOnClickOutside } from '../../hooks';
import { FC, useRef, useState } from 'react';
import { Form } from '../Form';
import { FormItemProps } from '../Form/types';
import { convertTo12Hours, convertTo24Hours, findNearestSlot } from '../../helpers/time';
import { TimeWrapper } from './styles';
import { TimeSlots } from './TimeSlots';

export type TimepickerProps = {
  value?: string;
  format?: '12' | '24';
  slotGap?: number;
  rightAlign?: boolean;
  onChange?: (value: string) => void;
} & Omit<FormItemProps, 'value' | 'type' | 'readOnly' | 'onChange' | 'onFocus'>;

export const Timepicker: FC<TimepickerProps> = (props) => {
  const { srOnly, label, rightAlign, value, format, slotGap, onChange, ...rest } = props;
  const defaultValue = value ? (format === '24' ? convertTo12Hours(value) : value) : findNearestSlot(slotGap);
  const [selectedTime, setSelectedTime] = useState(defaultValue);
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () => setIsOpen(false));
  const slotProps = { selectedTime, slotGap, ...rest };

  const handleTimeChange = (time: string) => {
    setSelectedTime(time);
    setIsOpen(false);
    onChange && onChange(format === '24' ? convertTo24Hours(time) : time);
  };

  return (
    <Form.Group ref={ref}>
      <Form.Label srOnly={srOnly}>{label}</Form.Label>
      <Form.Input type="text" readOnly value={selectedTime} onFocus={() => setIsOpen(true)} {...rest} />
      <TimeWrapper isRight={rightAlign}>
        {isOpen && <TimeSlots {...slotProps} onTimeClick={handleTimeChange} />}
      </TimeWrapper>
    </Form.Group>
  );
};
