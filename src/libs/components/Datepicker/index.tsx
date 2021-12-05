import React, { ComponentProps, FC } from 'react';
import '../styles/datepicker.css';
import '../styles/form.css';
import { PickerWithInput } from './PickerWithInput';
import { DateProvider, ProviderProps } from './useDateContext';

export type DatepickerProps = ComponentProps<typeof PickerWithInput> & ProviderProps;

export const Datepicker: FC<DatepickerProps> = (props) => {
  const { value, minDate, maxDate, weekEnds, ...rest } = props;
  const dateProvider = { value, minDate, maxDate, weekEnds };

  return (
    <DateProvider {...dateProvider}>
      <PickerWithInput {...rest} />
    </DateProvider>
  );
};
