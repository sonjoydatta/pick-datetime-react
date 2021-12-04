import { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';
import { theme } from '../theme';

export type HeadingProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  weight?: '400' | '600' | '700';
  textAlign?: 'left' | 'center' | 'right';
  textTransform?: 'uppercase' | 'lowercase' | 'capitalize' | 'none';
} & HTMLAttributes<HTMLHeadingElement>;

export const Heading: FC<HeadingProps> = ({ children, ...rest }) => <StyledHeading {...rest}>{children}</StyledHeading>;

const StyledHeading = styled.h1<HeadingProps>`
  font-size: ${({ as }) => {
    switch (as) {
      case 'h1':
        return '40px';
      case 'h2':
        return '32px';
      case 'h3':
        return '28px';
      case 'h4':
        return '24px';
      case 'h5':
        return '20px';
      case 'h6':
        return '16px';
      default:
        return '40px';
    }
  }};
  color: ${theme.colors.text};
  font-weight: ${({ weight = '700' }) => weight};
  text-align: ${({ textAlign = 'left' }) => textAlign};
  text-transform: ${({ textTransform = 'none' }) => textTransform};
  margin-top: 0;
  margin-bottom: 8px;
  line-height: 1.2;
`;
