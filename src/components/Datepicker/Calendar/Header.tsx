import { IconArrowLeft, IconArrowRight, SolidSVG } from '../../SolidSVG';
import { getMonth, getMonthName, getYear } from '../../../helpers/date';
import { CalendarHeader, HeaderTitle, NavidateBtn } from '../styles';
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
    <CalendarHeader>
      <HeaderTitle>
        {getMonthName(selectedDate)} {getYear(selectedDate)}
      </HeaderTitle>
      <div>
        <NavidateBtn onClick={handlePrevMonth} disabled={!isPrevNavigate()}>
          <SolidSVG width={12} height={12} path={IconArrowLeft} />
        </NavidateBtn>
        <NavidateBtn onClick={handleNextMonth} disabled={!isNextNavigate()}>
          <SolidSVG width={12} height={12} path={IconArrowRight} />
        </NavidateBtn>
      </div>
    </CalendarHeader>
  );
};
