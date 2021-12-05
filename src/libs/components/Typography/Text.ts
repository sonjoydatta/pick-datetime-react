import { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { theme } from '../theme';

export type TextProps = {
  size?: 'xs' | 'sm';
} & HTMLAttributes<HTMLParagraphElement>;

export const Text = styled.p<TextProps>`
  font-size: ${({ size }) => {
    switch (size) {
      case 'xs':
        return '9px';
      case 'sm':
        return '10px';
      default:
        return theme.fontSizeBase;
    }
  }};
  color: ${theme.colors.text};
  margin-top: 0;
  margin-bottom: 16px;
  line-height: 1.5;
`;
