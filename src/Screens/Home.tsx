import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";
import settingsIcon from "../assets/settings.svg";

const Home: React.FC = () => {
  const [date, setDate] = useState<Date | null>(null);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-[#F0EDCC]">
      <div className="absolute top-4 right-4 text-[#02343F] text-xl cursor-pointer">
        <img src={settingsIcon} alt="settings"></img>
      </div>
      <div className="h-3/12 w-3/4 flex flex-col items-center justify-center">
        <input
          type="text"
          placeholder="Enter heading here..."
          className="text-5xl text-[#02343F] font-bold text-center p-2 bg-transparent border-b-2 border-[#02343F] focus:outline-none "
        />

        <div className="mt-6 flex flex-col items-center">
          <div className="relative flex items-center border-2 border-[#02343F] px-4 py-2 rounded-lg">
            <DatePicker
              selected={date}
              onChange={(d) => setDate(d)}
              showTimeSelect
              dateFormat="dd/MM/yyyy, hh:mm aa"
              placeholderText="dd/mm/yyyy, --:-- --"
              className="outline-none bg-transparent text-3xl text-[#02343F] font-bold"
            />
            <FaCalendarAlt className="ml-2 text-gray-700" />
          </div>
          <p className="text-sm text-[#02343F] font-bold mt-2">
            Select Date and Time
          </p>
        </div>
      </div>

      <p className="absolute bottom-4 right-4 text-xs text-[#02343F] font-bold">
        A project by Poseidon0z and Azaken
      </p>
    </div>
  );
};

export default Home;
