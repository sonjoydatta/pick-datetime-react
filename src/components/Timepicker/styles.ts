import { hexToRGB } from '../../helpers';
import styled, { css } from 'styled-components';
import { Button } from '../Button';
import { theme } from '../theme';

type SlotButtonProps = {
  isSelected?: boolean;
  isToday?: boolean;
  isWeekend?: boolean;
};

export const TimeContainer = styled.div<{ rightAlign?: boolean }>`
  position: absolute;
  top: calc(100% + 10px);
  ${({ rightAlign }) => {
    if (rightAlign) {
      return css`
        right: 0;
      `;
    }
    return css`
      left: 0;
    `;
  }};
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 188px;
  max-height: 200px;
  overflow-y: scroll;
  border-radius: ${theme.borderRadius};
  background-color: ${theme.colors.white};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

export const SlotButton = styled(Button)<SlotButtonProps>`
  width: 100%;
  padding: 0 15px;
  line-height: 40px;
  text-align: left;
  color: ${({ isSelected }) => (isSelected ? theme.colors.white : theme.colors.text)};
  border-radius: 0;
  border-color: transparent;
  background-color: ${({ isSelected }) => (isSelected ? theme.colors.primary : 'transparent')};

  &:hover,
  &:focus {
    border-color: transparent;
    background-color: ${({ isSelected }) => (isSelected ? theme.colors.primary : hexToRGB(theme.colors.primary, 0.1))};
  }
`;
