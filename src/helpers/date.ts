export const daysOfMonth = (month: number, year: number) => {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const days = [];
  const day = firstDay.getDay();
  let i = 0;
  while (i < day) {
    days.push(null);
    i++;
  }
  while (firstDay <= lastDay) {
    days.push(new Date(firstDay));
    firstDay.setDate(firstDay.getDate() + 1);
  }
  return days;
};

export const weeksOfMonth = (month: number, year: number) => {
  const days = daysOfMonth(month, year);
  const weeks: (Date | null)[][] = [];
  let week: (Date | null)[] = [];
  days.forEach((day, index) => {
    if (index % 7 === 0 && index !== 0) {
      weeks.push(week);
      week = [];
    }
    week.push(day);
  });
  weeks.push(week);
  return weeks;
};

export const getMonth = (date: Date) => {
  return date.getMonth();
};

export const getDay = (date: Date) => {
  return date.getDate();
};

export const getYear = (date: Date) => {
  return date.getFullYear();
};

export const getWeekDayName = (date: Date) => {
  return new Date(date).toLocaleDateString('en-US', { weekday: 'short' });
};

export const getMonthName = (date: Date) => {
  return new Date(date).toLocaleDateString('en-US', { month: 'long' });
};

export const dateIsEqual = (date1: Date, date2: Date) => {
  return (
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  );
};

export const dateIsLessThan = (date1: Date, date2: Date) => {
  return (
    date1.getDate() < date2.getDate() ||
    date1.getMonth() < date2.getMonth() ||
    date1.getFullYear() < date2.getFullYear()
  );
};
