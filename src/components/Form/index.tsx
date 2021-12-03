import { FC } from 'react';
import { FormCheck, FormGroup, FormInput, FormLabel, FormMessage } from './styles';
import { FormCheckItemProps, FormItemProps } from './types';

export const FormItem: FC<FormItemProps> = (props) => {
  const { label, srOnly, type, message, ...rest } = props;

  return (
    <FormGroup>
      <FormLabel srOnly={srOnly}>{label}</FormLabel>
      <FormInput
        type={type || 'text'}
        messageType={message?.value ? message?.variant || 'danger' : undefined}
        {...rest}
      />
      {message && <FormMessage variant={message.variant}>{message.value}</FormMessage>}
    </FormGroup>
  );
};

export const FormCheckItem: FC<FormCheckItemProps> = (props) => {
  const { label, srOnly, type, message, ...rest } = props;
  const labelProps = { htmlFor: rest.id || '', srOnly };

  return (
    <FormGroup>
      <FormCheck
        type={type === 'radio' ? 'radio' : 'checkbox'}
        messageType={message?.value ? message?.variant || 'danger' : undefined}
        {...rest}
      />
      <FormLabel {...labelProps} style={{ marginBottom: 0 }}>
        {label}
      </FormLabel>
      {message && <FormMessage variant={message.variant}>{message.value}</FormMessage>}
    </FormGroup>
  );
};

export const Form = {
  Group: FormGroup,
  Input: FormInput,
  Label: FormLabel,
  Check: FormCheck,
  Message: FormMessage,
};
