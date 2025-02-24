import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt, FaCog } from "react-icons/fa";

const Home: React.FC = () => {
  const [heading, setHeading] = useState("Enter heading here...");
  const [date, setDate] = useState<Date | null>(null);

  return (
    <div className="h-screen flex items-center justify-center bg-gray-900">
      <div className="relative w-[80%] h-[80%] bg-cream p-8 rounded-lg shadow-lg flex flex-col items-center justify-center">
        <div className="absolute top-4 left-4 text-gray-700 text-sm">
          Create Screen
        </div>
        <div className="absolute top-4 right-4 text-gray-700 text-xl cursor-pointer">
          <FaCog />
        </div>

        <input
          type="text"
          value={heading}
          onChange={(e) => setHeading(e.target.value)}
          className="text-2xl font-bold text-center bg-transparent border-b-2 border-gray-700 focus:outline-none focus:border-gray-900"
        />

        <div className="mt-6 flex flex-col items-center">
          <div className="relative flex items-center border-2 border-gray-700 px-4 py-2 rounded-lg">
            <DatePicker
              selected={date}
              onChange={(d) => setDate(d)}
              showTimeSelect
              dateFormat="dd/MM/yyyy, hh:mm aa"
              placeholderText="dd/mm/yyyy, --:-- --"
              className="outline-none bg-transparent"
            />
            <FaCalendarAlt className="ml-2 text-gray-700" />
          </div>
          <p className="text-sm text-gray-700 mt-2">Select Date and Time</p>
        </div>

        <p className="absolute bottom-4 right-4 text-xs text-gray-700">
          A project by Poseidontoz and Azaken
        </p>
      </div>
    </div>
  );
};

export default Home;
