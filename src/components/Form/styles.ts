import { hexToRGB } from '../../helpers';
import styled, { css } from 'styled-components';
import { Text } from '../Typography';
import { FormCheckProps, FormGroupProps, FormInputProps, FormLabelProps, FormMessageProps } from './types';

const baseStyles = css`
  font-family: ${({ theme }) => theme.fontFamailyBase};
  font-size: ${({ theme }) => theme.fontSizeBase};
  font-weight: 400;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.text};
`;

export const FormGroup = styled.div<FormGroupProps>`
  display: block;
  width: 100%;
  margin-bottom: 16px;
`;

export const FormLabel = styled.label<FormLabelProps>`
  margin-bottom: 4px;
  display: inline-block;
  ${baseStyles}

  ${({ srOnly }) => {
    if (srOnly) {
      return css`
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        border: 0;
      `;
    }
    return null;
  }}
`;

export const FormInput = styled.input<FormInputProps>`
  display: block;
  width: 100%;
  padding: 11px 16px;
  ${baseStyles};
  background-color: ${({ theme }) => theme.colors.secondary};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  appearance: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:placeholder-shown {
    text-overflow: ellipsis;
    color: #707070;
  }

  &:focus {
    outline: 0;
    background-color: ${({ theme }) => hexToRGB(theme.colors.primary, 0.08)};
    border-color: ${({ theme }) => hexToRGB(theme.colors.primary, 0.5)};
    box-shadow: 0 0 0 2px ${({ theme }) => hexToRGB(theme.colors.primary, 0.25)};
  }

  ${({ messageType }) => {
    if (messageType) {
      return css`
        border-color: ${({ theme }) => theme.colors[messageType]};
        box-shadow: 0 0 0 2px ${({ theme }) => hexToRGB(theme.colors[messageType], 0.25)};

        &:focus {
          border-color: ${({ theme }) => theme.colors[messageType]};
          box-shadow: 0 0 0 2px ${({ theme }) => hexToRGB(theme.colors[messageType], 0.25)};
        }
      `;
    }
    return null;
  }}
`;

export const FormCheck = styled.input<FormCheckProps>`
  width: 16px;
  height: 16px;
  margin: 2px 8px 0 0;
  vertical-align: top;
  background-color: ${({ theme }) => theme.colors.secondary};
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  appearance: none;

  &[type='checkbox'] {
    border-radius: 4px;
  }

  &:checked {
    background-color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};

    &[type='checkbox'] {
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e");
    }
  }

  &[type='radio'] {
    border-radius: 50%;
  }

  ${({ messageType }) => {
    if (messageType) {
      return css`
        border-color: ${({ theme }) => theme.colors[messageType]};
        box-shadow: 0 0 0 2px ${({ theme }) => hexToRGB(theme.colors[messageType], 0.25)};
      `;
    }
    return null;
  }}
`;

export const FormMessage = styled(Text)<FormMessageProps>`
  margin: 0 5px;
  font-size: 12px;
  color: ${({ theme, variant = 'danger' }) => theme.colors[variant]};
`;
