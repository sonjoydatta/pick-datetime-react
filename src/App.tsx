import { Datepicker } from './components/Datepicker';
import { Timepicker } from './components/Timepicker';

function App() {
  return (
    <div className="App">
      <div style={{ margin: '0 auto', width: '300px' }}>
        <Datepicker
          label="Booking date"
          name="bookingDate"
          placeholder="Choose a date"
          minDate={new Date()}
          maxDate={new Date(2022, 1, 26)}
          weekEnds={['Sun', 'Sat']}
        />
        <Timepicker
          label="Booking time"
          name="bookingTime"
          placeholder="Choose a time"
          rightAlign
          slotGap={20}
          format="24"
        />
      </div>
    </div>
  );
}

export default App;
