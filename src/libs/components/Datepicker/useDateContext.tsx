/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, Dispatch, FC, SetStateAction, useContext, useState } from 'react';
import { checkMonthHasDay, dateIsLessThan } from '../../helpers/date';

export type WeekDays = 'Sun' | 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat';
type Props = {
  today: Date;
  minDate: Date | undefined;
  maxDate: Date | undefined;
  weekEnds: WeekDays[] | undefined;
  selectedDate: Date;
  isCalendarOpen: boolean;
  setIsCalendarOpen: Dispatch<SetStateAction<boolean>>;
  handleDateChange: (date: Date) => void;
  handleNextMonth: () => void;
  handlePrevMonth: () => void;
};

export type ProviderProps = {
  value?: Date;
} & Partial<Pick<Props, 'today' | 'minDate' | 'maxDate' | 'weekEnds'>>;

const defaultValue: Props = {
  today: new Date(),
  minDate: undefined,
  maxDate: undefined,
  weekEnds: undefined,
  selectedDate: new Date(),
  isCalendarOpen: false,
  setIsCalendarOpen: () => {},
  handleDateChange: () => {},
  handleNextMonth: () => {},
  handlePrevMonth: () => {},
};

const DateContext = createContext<Props>(defaultValue);

export const DateProvider: FC<ProviderProps> = (props) => {
  const { value, minDate, maxDate, weekEnds, children } = props;
  const getInitialDate = () => {
    const date = value || new Date();
    if (minDate && dateIsLessThan(date, minDate)) {
      return new Date(minDate);
    }
    return date;
  };
  const [selectedDate, setSelectedDate] = useState(getInitialDate());
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
    setIsCalendarOpen(false);
  };

  const getNewDate = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const newDate = checkMonthHasDay(month + 1, year, day);
    if (maxDate && newDate.getMonth() === maxDate.getMonth() && newDate.getFullYear() === maxDate.getFullYear()) {
      if (newDate.getDate() > maxDate.getDate()) {
        return maxDate.getDate();
      }
    }
    return newDate.getDate();
  };

  const handleNextMonth = () => {
    setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, getNewDate(selectedDate)));
  };

  const handlePrevMonth = () => {
    setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, getNewDate(selectedDate)));
  };

  return (
    <DateContext.Provider
      value={{
        today: new Date(),
        minDate,
        maxDate,
        weekEnds,
        selectedDate,
        isCalendarOpen,
        setIsCalendarOpen,
        handleDateChange,
        handleNextMonth,
        handlePrevMonth,
      }}
    >
      {children}
    </DateContext.Provider>
  );
};

export const useDateContext = () => useContext(DateContext);
