import { hexToRGB } from '../helpers';
import { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { theme } from './theme';

export type ButtonProps = {
  size?: 'sm' | 'lg';
} & HTMLAttributes<HTMLButtonElement>;

export const Button = styled.button<ButtonProps>`
  display: inline-block;
  color: ${theme.colors.white};
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  outline: none;
  user-select: none;
  background-color: ${theme.colors.primary};
  border: 1px solid ${theme.colors.primary};
  padding: ${({ size }) => (size === 'sm' ? '4px 24px' : '10px 48px')};
  font-size: ${({ size }) => (size === 'sm' ? theme.fontSizeBase : '18px')};
  border-radius: 40px;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

  &:hover,
  &:focus,
  &.active {
    border-color: ${hexToRGB(theme.colors.primary, 0.85)};
    background-color: ${hexToRGB(theme.colors.primary, 0.85)};
  }
`;
