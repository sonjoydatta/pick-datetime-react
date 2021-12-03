const formatMinutes = (minutes: number) => {
  return minutes < 10 ? `0${minutes}` : minutes;
};

export const convertTo24Hours = (time: string) => {
  const amPm = time.split(' ')[1].toUpperCase();
  const timeWithoutAmPm = time.replace(/[AP]M/gi, '');
  const hours = Number(timeWithoutAmPm.split(':')[0]);
  const minutes = Number(timeWithoutAmPm.split(':')[1]);
  if (amPm === 'PM' && hours < 12) {
    return `${hours + 12}:${formatMinutes(minutes)}`;
  }
  return `${hours === 12 ? 0 : hours}:${formatMinutes(minutes)}`;
};

export const convertTo12Hours = (time: string) => {
  const hours = Number(time.split(':')[0]);
  const minutes = Number(time.split(':')[1]);
  const suffix = hours >= 12 ? 'PM' : 'AM';
  const newHours = hours > 12 ? hours - 12 : hours;
  return `${newHours === 0 ? 12 : newHours}:${formatMinutes(minutes)} ${suffix}`;
};

export const getSlots = (gap = 15) => {
  const slots = [];
  for (let i = 0; i < 24; i++) {
    for (let j = 0; j < 60; j += gap) {
      const time = convertTo12Hours(`${i}:${j}`);
      slots.push(time);
    }
  }
  return slots;
};

export const findNearestSlot = (gap = 15) => {
  const time = new Date();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  for (let i = 0; i < 60; i += gap) {
    if (i > minutes) {
      return convertTo12Hours(`${hours}:${i}`);
    }
  }
  return convertTo12Hours(`${hours}:00`);
};

export const timeIsEqual = (time1: string, time2: string) => {
  return time1.replace(/ /, '').toLowerCase() === time2.replace(/ /, '').toLowerCase();
};
