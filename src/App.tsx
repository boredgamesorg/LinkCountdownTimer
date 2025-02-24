import { useState } from 'react';
import { SiteDataProvider } from './contexts/SiteDataProvider';

function App() {
  const [selectedDate, setSelectedDate] = useState('');

  return (
    <SiteDataProvider>
      <div className="p-4 w-80 border rounded-lg shadow-md flex flex-col items-center gap-4">
        <label className="text-gray-700 font-medium">Select Date & Time</label>
        <input
          type="datetime-local"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-red-400"
        />
      </div>
    </SiteDataProvider>
  );
}

export default App;
