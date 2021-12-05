# datetime-picker-react

A simple and reusable datepicker and timepicker component for React.

## Installation

Install via NPM:

`npm install datetime-picker-react --save`

or by using Yarn:

`yarn add datetime-picker-react`

## Examples

For datepicker:

```jsx
<Datepicker
  label="Booking date"
  name="bookingDate"
  placeholder="Choose a date"
  // minDate={new Date()}
  // maxDate={new Date(2022, 1, 26)}
  // weekEnds={['Sun', 'Sat']}
  onChange={(date) => console.log(date)}
  // message={{ value: 'Please select a valid date' }}
/>
```

For timepicker:

```jsx
const now = new Date();

<Timepicker
  label="Booking time"
  name="bookingTime"
  placeholder="Choose a time"
  // rightAlign
  // slotGap={20}
  // format="24"
  // startFrom={`${now.getHours()}:${now.getMinutes()}`}
  onChange={(time) => console.log(time)}
  // message={{ value: 'Please select a valid time' }}
/>;
```

## License

Licensed under MIT license, see [LICENSE][license] for the full license.

[npm]: https://www.npmjs.com
[node]: https://nodejs.org
[package]: https://www.npmjs.com/package/datetime-picker-react
[version-badge]: https://img.shields.io/npm/v/datetime-picker-react?style=flat-square
[license-badge]: https://img.shields.io/npm/l/datetime-picker-react?style=flat-square
[license]: https://github.com/sonjoydatta/datetime-picker-react/blob/main/LICENSE
