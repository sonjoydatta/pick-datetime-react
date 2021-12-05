import React from 'react';
import { getMonth, getMonthName, getYear } from '../../../helpers/date';
import { IconArrowLeft, IconArrowRight, SolidSVG } from '../../SolidSVG';
import { useDateContext } from '../useDateContext';

export const Header = () => {
  const { selectedDate, minDate, maxDate, handlePrevMonth, handleNextMonth } = useDateContext();

  const isPrevNavigate = () => {
    if (minDate && getYear(minDate) === getYear(selectedDate)) {
      return getMonth(minDate) < getMonth(selectedDate);
    }
    return true;
  };

  const isNextNavigate = () => {
    if (maxDate && getYear(maxDate) === getYear(selectedDate)) {
      return getMonth(maxDate) > getMonth(selectedDate);
    }
    return true;
  };

  return (
    <div className="calendar-header">
      <p className="calendar-header__title">
        {getMonthName(selectedDate)} {getYear(selectedDate)}
      </p>
      <div className="calendar-header__navigate">
        <button className="calendar-header__navigate-btn" onClick={handlePrevMonth} disabled={!isPrevNavigate()}>
          <SolidSVG width={12} height={12} path={IconArrowLeft} />
        </button>
        <button className="calendar-header__navigate-btn" onClick={handleNextMonth} disabled={!isNextNavigate()}>
          <SolidSVG width={12} height={12} path={IconArrowRight} />
        </button>
      </div>
    </div>
  );
};
