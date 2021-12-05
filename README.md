# pick-datetime-react

A simple and reusable date-time picker component for React.

[![version][version-badge]][package]
[![MIT License][license-badge]][license]
[![🚀 Publish][workflow-badge]][workflow]

## Installation

Install via NPM:

```
npm install pick-datetime-react --save
```

or by using Yarn:

```
yarn add pick-datetime-react
```

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

![][datepicker-image]

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

![][timepicker-image]

## License

Licensed under MIT license, see [LICENSE][license] for the full license.

[npm]: https://www.npmjs.com
[node]: https://nodejs.org
[package]: https://www.npmjs.com/package/pick-datetime-react
[version-badge]: https://img.shields.io/npm/v/pick-datetime-react
[license-badge]: https://img.shields.io/npm/l/pick-datetime-react
[license]: https://github.com/sonjoydatta/pick-datetime-react/blob/main/LICENSE
[workflow-badge]: https://github.com/sonjoydatta/pick-datetime-react/actions/workflows/publish.yml/badge.svg
[workflow]: https://github.com/sonjoydatta/pick-datetime-react/actions/workflows/publish.yml
[datepicker-image]: https://i.ibb.co/jGrXZSV/datepicker.png
[timepicker-image]: https://i.ibb.co/Vt5L1HC/timepicker.png
