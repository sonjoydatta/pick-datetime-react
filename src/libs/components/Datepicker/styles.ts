import { hexToRGB } from '../../helpers';
import styled, { css } from 'styled-components';
import { Button } from '../Button';
import { Text } from '../Typography';
import { theme } from '../theme';

type DayButtonProps = {
  isSelected?: boolean;
  isToday?: boolean;
  isWeekend?: boolean;
};

export const CalendarContainer = styled.div`
  position: absolute;
  top: calc(100% + 10px);
  display: flex;
  flex-direction: column;
  max-width: 370px;
  min-width: 280px;
  width: 100%;
  padding: 16px;
  border-radius: ${theme.borderRadius};
  background-color: ${theme.colors.white};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  z-index: 1;
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
  border-radius: ${theme.borderRadius};
  background-color: ${hexToRGB(theme.colors.primary, 0.1)};

  & + & {
    margin-left: 8px;
  }

  &:hover,
  &:focus {
    background-color: ${hexToRGB(theme.colors.primary, 0.2)};
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  }

  &:disabled {
    cursor: default;
    opacity: 0.5;

    &:hover {
      background-color: ${hexToRGB(theme.colors.primary, 0.1)};
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
  font-size: ${theme.fontSizeBase};
  color: ${theme.colors.text};

  thead {
    th {
      color: ${theme.colors.primary};

      &.weekend {
        color: ${theme.colors.danger};
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
  color: ${theme.colors.text};
  font-weight: 400;
  background-color: ${theme.colors.white};
  border-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius};

  ${({ isWeekend }) =>
    isWeekend &&
    css`
      color: ${theme.colors.danger};
    `};

  ${({ isToday }) =>
    isToday &&
    css`
      border-color: ${theme.colors.primary};
    `};

  ${({ isSelected }) =>
    isSelected &&
    css`
      color: ${theme.colors.white};
      border-color: ${hexToRGB(theme.colors.primary, 0.85)};
      background-color: ${hexToRGB(theme.colors.primary, 0.85)};
    `};

  &:hover,
  &:focus {
    color: ${theme.colors.white};
  }

  &:disabled {
    cursor: default;
    color: ${hexToRGB(theme.colors.text, 0.5)};
    background-color: ${theme.colors.white};
    border-color: transparent;
  }
`;
