import { hexToRGB } from '../../helpers';
import styled, { css } from 'styled-components';
import { Text } from '../Typography';
import { FormCheckProps, FormGroupProps, FormInputProps, FormLabelProps, FormMessageProps } from './types';
import { theme } from '../theme';

export const FormGroup = styled.div<FormGroupProps>`
  display: block;
  width: 100%;
  margin-bottom: 16px;
`;

export const FormLabel = styled.label<FormLabelProps>`
  margin-bottom: 4px;
  display: inline-block;
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
  background-color: ${theme.colors.secondary};
  border: 1px solid ${theme.colors.secondary};
  appearance: none;
  border-radius: ${theme.borderRadius};
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:placeholder-shown {
    text-overflow: ellipsis;
    color: #707070;
  }

  &:focus {
    outline: 0;
    background-color: ${hexToRGB(theme.colors.primary, 0.08)};
    border-color: ${hexToRGB(theme.colors.primary, 0.5)};
    box-shadow: 0 0 0 2px ${hexToRGB(theme.colors.primary, 0.25)};
  }

  ${({ messageType }) => {
    if (messageType) {
      return css`
        border-color: ${theme.colors[messageType]};
        box-shadow: 0 0 0 2px ${hexToRGB(theme.colors[messageType], 0.25)};

        &:focus {
          border-color: ${theme.colors[messageType]};
          box-shadow: 0 0 0 2px ${hexToRGB(theme.colors[messageType], 0.25)};
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
  background-color: ${theme.colors.secondary};
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  border: 1px solid ${theme.colors.primary};
  appearance: none;

  &[type='checkbox'] {
    border-radius: 4px;
  }

  &:checked {
    background-color: ${theme.colors.primary};
    border-color: ${theme.colors.primary};

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
        border-color: ${theme.colors[messageType]};
        box-shadow: 0 0 0 2px ${hexToRGB(theme.colors[messageType], 0.25)};
      `;
    }
    return null;
  }}
`;

export const FormMessage = styled(Text)<FormMessageProps>`
  margin: 0 5px;
  color: ${({ variant = 'danger' }) => theme.colors[variant]};
`;
