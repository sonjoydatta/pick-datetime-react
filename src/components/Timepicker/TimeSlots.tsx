import { FC, useEffect, useRef } from 'react';
import { getSlots, timeIsEqual } from '../../helpers/time';
import { SlotButton, TimeContainer } from './styles';

type TimeSlotsProps = {
  selectedTime: string;
  slotGap?: number;
  onTimeClick: (time: string) => void;
};

export const TimeSlots: FC<TimeSlotsProps> = (props) => {
  const { selectedTime, slotGap, onTimeClick } = props;
  const timeSlots = getSlots(slotGap);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      container.childNodes.forEach((node) => {
        const element = node as HTMLButtonElement;
        if (timeIsEqual(element.innerText, selectedTime)) {
          const scrollTo = element.offsetTop - container.offsetTop;
          container.scrollTo({ top: scrollTo });
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerRef]);

  return (
    <TimeContainer ref={containerRef}>
      {timeSlots.map((time, i) => (
        <SlotButton key={i} size="sm" isSelected={timeIsEqual(selectedTime, time)} onClick={() => onTimeClick(time)}>
          {time}
        </SlotButton>
      ))}
    </TimeContainer>
  );
};
