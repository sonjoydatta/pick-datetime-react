import { ComponentProps, FC } from 'react';
import { PickerWithInput } from './PickerWithInput';
import { DateProvider, ProviderProps } from './useDateContext';

type DatePickerProps = ComponentProps<typeof PickerWithInput> & ProviderProps;

export const Datepicker: FC<DatePickerProps> = (props) => {
  const { value, minDate, maxDate, weekEnds, ...rest } = props;
  const dateProvider = { value, minDate, maxDate, weekEnds };

  return (
    <DateProvider {...dateProvider}>
      <PickerWithInput {...rest} />
    </DateProvider>
  );
};
