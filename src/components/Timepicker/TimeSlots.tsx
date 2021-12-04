import { FC, useEffect, useRef } from 'react';
import { getSlots, sortSlots, timeIsEqual } from '../../helpers/time';
import { SlotButton, TimeContainer } from './styles';

export type TimeSlotsProps = {
  selectedTime: string;
  slotGap?: number;
  rightAlign?: boolean;
  startFrom?: string;
  onChange: (time: string) => void;
};

export const TimeSlots: FC<TimeSlotsProps> = (props) => {
  const { selectedTime, slotGap, startFrom, onChange, ...rest } = props;
  const timeSlots = startFrom ? sortSlots(startFrom, slotGap) : getSlots(slotGap);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      container.childNodes.forEach((node) => {
        const element = node as HTMLButtonElement;
        if (timeIsEqual(element.innerText, selectedTime)) {
          const scrollTo = element.offsetTop - container.offsetTop;
          container.scrollTop = scrollTo;
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerRef]);

  return (
    <TimeContainer ref={containerRef} {...rest}>
      {timeSlots.map((time, i) => (
        <SlotButton key={i} size="sm" isSelected={timeIsEqual(selectedTime, time)} onClick={() => onChange(time)}>
          {time}
        </SlotButton>
      ))}
    </TimeContainer>
  );
};
