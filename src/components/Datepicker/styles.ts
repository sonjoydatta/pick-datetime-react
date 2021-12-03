import { hexToRGB } from '../../helpers';
import styled, { css } from 'styled-components';
import { Button } from '../Button';
import { Text } from '../Typography';

type DayButtonProps = {
  isSelected?: boolean;
  isToday?: boolean;
  isWeekend?: boolean;
};

export const CalendarWrapper = styled.div`
  position: relative;
`;

export const CalendarContainer = styled.div`
  position: absolute;
  top: 10px;
  display: flex;
  flex-direction: column;
  max-width: 370px;
  min-width: 280px;
  width: 100%;
  padding: 16px;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const NavidateBtn = styled(Button)`
  width: 32px;
  height: 32px;
  padding: 0;
  line-height: 32px;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => hexToRGB(theme.colors.primary, 0.1)};

  & + & {
    margin-left: 8px;
  }

  &:hover,
  &:focus {
    background-color: ${({ theme }) => hexToRGB(theme.colors.primary, 0.2)};
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  }

  &:disabled {
    cursor: default;
    opacity: 0.5;

    &:hover {
      background-color: ${({ theme }) => hexToRGB(theme.colors.primary, 0.1)};
      box-shadow: none;
    }
  }
`;

export const HeaderTitle = styled(Text)`
  font-weight: 600;
  margin-bottom: 0;
`;

export const CalendarBody = styled.div`
  width: 100%;
  display: block;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-family: ${({ theme }) => theme.fontFamailyBase};
  font-size: ${({ theme }) => theme.fontSizeBase};
  color: ${({ theme }) => theme.colors.text};

  thead {
    th {
      color: ${({ theme }) => theme.colors.primary};

      &.weekend {
        color: ${({ theme }) => theme.colors.danger};
      }
    }
  }

  th,
  td {
    width: 14.28%;
    text-align: center;
    font-weight: 400;
    padding: 0;
  }

  td {
    height: 36px;
  }
`;

export const DayButton = styled(Button)<DayButtonProps>`
  width: calc(100% - 4px);
  height: calc(100% - 4px);
  margin: 2px;
  padding: 0;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 400;
  background-color: ${({ theme }) => theme.colors.white};
  border-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius};

  ${({ isWeekend }) =>
    isWeekend &&
    css`
      color: ${({ theme }) => theme.colors.danger};
    `};

  ${({ isToday }) =>
    isToday &&
    css`
      border-color: ${({ theme }) => theme.colors.primary};
    `};

  ${({ isSelected }) =>
    isSelected &&
    css`
      color: ${({ theme }) => theme.colors.white};
      border-color: ${({ theme }) => hexToRGB(theme.colors.primary, 0.85)};
      background-color: ${({ theme }) => hexToRGB(theme.colors.primary, 0.85)};
    `};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.white};
  }

  &:disabled {
    cursor: default;
    color: ${({ theme }) => hexToRGB(theme.colors.text, 0.5)};
    background-color: ${({ theme }) => theme.colors.white};
    border-color: transparent;
  }
`;
