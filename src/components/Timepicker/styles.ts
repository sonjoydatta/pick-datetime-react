import { hexToRGB } from '../../helpers';
import styled, { css } from 'styled-components';
import { Button } from '../Button';

type SlotButtonProps = {
  isSelected?: boolean;
  isToday?: boolean;
  isWeekend?: boolean;
};

export const TimeContainer = styled.div`
  position: absolute;
  top: 10px;
  display: flex;
  flex-direction: column;
  width: 188px;
  max-height: 200px;
  overflow-y: scroll;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export const TimeWrapper = styled.div<{ isRight?: boolean }>`
  position: relative;

  ${TimeContainer} {
    ${({ isRight }) => {
      if (isRight) {
        return css`
          right: 0;
          left: auto;
        `;
      }

      return css`
        left: 0;
        right: auto;
      `;
    }}
  }
`;

export const SlotButton = styled(Button)<SlotButtonProps>`
  width: 100%;
  padding: 0 15px;
  line-height: 40px;
  text-align: left;
  color: ${({ theme, isSelected }) => (isSelected ? theme.colors.white : theme.colors.text)};
  border-radius: 0;
  border-color: transparent;
  background-color: ${({ theme, isSelected }) => (isSelected ? theme.colors.primary : 'transparent')};

  &:hover,
  &:focus {
    border-color: transparent;
    background-color: ${({ theme, isSelected }) =>
      isSelected ? theme.colors.primary : hexToRGB(theme.colors.primary, 0.1)};
  }
`;
