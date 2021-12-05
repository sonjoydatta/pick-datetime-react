import React, { FC, useEffect, useRef } from 'react';
import { getSlots, sortSlots, timeIsEqual } from '../../helpers/time';

export type TimeSlotsProps = {
  selectedTime: string;
  slotGap?: number;
  rightAlign?: boolean;
  startFrom?: string;
  onChange: (time: string) => void;
};

export const TimeSlots: FC<TimeSlotsProps> = (props) => {
  const { selectedTime, slotGap, startFrom, rightAlign, onChange } = props;
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
    <div ref={containerRef} className={`timepicker-slots${rightAlign ? ' right-align' : ''}`}>
      {timeSlots.map((time, i) => (
        <button
          key={i}
          className={`timepicker-slots__btn${timeIsEqual(time, selectedTime) ? ' slected' : ''}`}
          onClick={() => onChange(time)}
        >
          {time}
        </button>
      ))}
    </div>
  );
};
