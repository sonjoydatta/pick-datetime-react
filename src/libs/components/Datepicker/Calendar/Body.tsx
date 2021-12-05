import React from 'react';
import { dateIsEqual, getDay, getMonth, getWeekDayName, getYear, weeksOfMonth } from '../../../helpers/date';
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
    <div className="calendar-body">
      <table className="calendar-body__table">
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
                    <button
                      className={`${dateIsEqual(day, today) ? 'today' : ''} ${
                        dateIsEqual(day, selectedDate) ? 'selected' : ''
                      } ${weekEnds?.includes(getWeekDayName(day) as WeekDays) ? 'weekend' : ''}`}
                      // size="sm"
                      onClick={() => handleDateChange(day)}
                      disabled={isDisabledFrom(day) || isDisabledTo(day)}
                    >
                      {getDay(day)}
                    </button>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
