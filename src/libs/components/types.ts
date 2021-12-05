import { InputHTMLAttributes, LabelHTMLAttributes, ReactNode } from 'react';

export type Rename<T, K extends keyof T, N extends string> = Pick<T, Exclude<keyof T, K>> & { [P in N]: T[K] };

export type FormGroupProps = {
  children: ReactNode;
};

export type FormLabelProps = {
  srOnly?: boolean;
} & LabelHTMLAttributes<HTMLLabelElement>;

export type FormInputProps = {
  messageType?: FormMessageProps['variant'];
} & InputHTMLAttributes<HTMLInputElement>;

export type FormMessageProps = {
  children: ReactNode;
  variant?: 'danger' | 'success';
};

export type FormItemProps = {
  label?: ReactNode;
  message?: Rename<FormMessageProps, 'children', 'value'>;
} & Pick<FormLabelProps, 'srOnly'> &
  FormInputProps;
