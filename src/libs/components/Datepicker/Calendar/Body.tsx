import React from 'react';
import { dateIsEqual, getDay, getMonth, getWeekDayName, getYear, weeksOfMonth } from '../../../helpers/date';
import { CalendarBody, DayButton, Table } from '../styles';
import { useDateContext, WeekDays } from '../useDateContext';

export const Body = () => {
  const { today, selectedDate, minDate, maxDate, weekEnds, handleDateChange } = useDateContext();
  const month = getMonth(selectedDate);
  const year = getYear(selectedDate);

  const isDisabledFrom = (date: Date) => {
    if (minDate && getYear(minDate) === getYear(date) && getMonth(minDate) === getMonth(date)) {
      return getDay(minDate) > getDay(date);
    }
    return false;
  };

  const isDisabledTo = (date: Date) => {
    if (maxDate && getYear(maxDate) === getYear(date) && getMonth(maxDate) === getMonth(date)) {
      return getDay(maxDate) < getDay(date);
    }
    return false;
  };

  return (
    <CalendarBody>
      <Table>
        <thead>
          <tr>
            {weeksOfMonth(month, year)?.[2].map(
              (day, i) =>
                day && (
                  <th key={i} className={weekEnds?.includes(getWeekDayName(day) as WeekDays) ? 'weekend' : ''}>
                    {getWeekDayName(day)}
                  </th>
                ),
            )}
          </tr>
        </thead>
        <tbody>
          {weeksOfMonth(month, year).map((week, i) => (
            <tr key={i}>
              {week.map((day, j) => (
                <td key={j}>
                  {day && (
                    <DayButton
                      size="sm"
                      isToday={dateIsEqual(day, today)}
                      isSelected={dateIsEqual(day, selectedDate)}
                      isWeekend={weekEnds?.includes(getWeekDayName(day) as WeekDays)}
                      onClick={() => handleDateChange(day)}
                      disabled={isDisabledFrom(day) || isDisabledTo(day)}
                    >
                      {getDay(day)}
                    </DayButton>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </CalendarBody>
  );
};
