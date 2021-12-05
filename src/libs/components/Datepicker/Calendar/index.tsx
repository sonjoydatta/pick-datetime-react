import React from 'react';
import { CalendarContainer } from '../styles';
import { Body } from './Body';
import { Header } from './Header';

export const Calendar = () => (
  <CalendarContainer className="datepicker-calendar">
    <Header />
    <Body />
  </CalendarContainer>
);
