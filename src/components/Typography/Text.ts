import { HTMLAttributes } from 'react';
import styled from 'styled-components';

export type TextProps = {
  size?: 'xs' | 'sm';
} & HTMLAttributes<HTMLParagraphElement>;

export const Text = styled.p<TextProps>`
  font-family: ${({ theme }) => theme.fontFamailyBase};
  font-size: ${({ size, theme }) => {
    switch (size) {
      case 'xs':
        return '9px';
      case 'sm':
        return '10px';
      default:
        return theme.fontSizeBase;
    }
  }};
  color: ${({ theme }) => theme.colors.text};
  margin-top: 0;
  margin-bottom: 16px;
  line-height: 1.5;
`;
