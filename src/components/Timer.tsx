import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import { getTimerData } from "../EncoderDecoder/numberLookup";
import { splitHeadingAndInfo } from "../EncoderDecoder/scripts";

interface Props {
  primary: string;
  secondary: string;
}

const getTimeRemaining = (futureTimestamp: number) => {
  const now = Date.now(); // Current time in milliseconds
  let timeLeft = futureTimestamp - now; // Difference in milliseconds
  // console.log(now, futureTimestamp, timeLeft);

  if (timeLeft < 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }; // Return zero if time has passed
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  timeLeft %= 1000 * 60 * 60 * 24;

  const hours = Math.floor(timeLeft / (1000 * 60 * 60));
  timeLeft %= 1000 * 60 * 60;

  const minutes = Math.floor(timeLeft / (1000 * 60));
  timeLeft %= 1000 * 60;

  const seconds = Math.floor(timeLeft / 1000);

  return { days, hours, minutes, seconds };
};

function Timer({ primary, secondary }: Props) {
  // const navigate = useNavigate();

  const { context } = useParams();
  // console.log('Context: ', context);

  const result = splitHeadingAndInfo(context || "Error, check the link");

  const header = result.heading;
  const time = getTimerData(result.info).time;
  const [vals, setVals] = useState(getTimeRemaining(time));

  useEffect(() => {
    const interval = setInterval(() => {
      // console.log('vals: ', vals);
      setVals(getTimeRemaining(time));
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  return (
    <div className="w-full max-w-4xl flex flex-col justify-center items-center px-4 z-10">
      <div
        style={{ color: secondary }}
        className="font-bold text-4xl md:text-5xl lg:text-[64px] text-center w-full"
      >
        {header}
      </div>

      <div className="flex justify-center gap-2.5 w-full max-w-lg mt-6 flex-wrap">
        <div
          style={{ color: primary, backgroundColor: secondary }}
          className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 flex flex-col items-center justify-center rounded-md"
        >
          <div className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold mb-1">
            {vals.days}
          </div>
          <div className="text-xs sm:text-sm">Days</div>
        </div>
        <div
          style={{ color: primary, backgroundColor: secondary }}
          className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 flex flex-col items-center justify-center rounded-md"
        >
          <div className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold mb-1">
            {vals.hours}
          </div>
          <div className="text-xs sm:text-sm">Hours</div>
        </div>
        <div
          style={{ color: primary, backgroundColor: secondary }}
          className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 flex flex-col items-center justify-center rounded-md"
        >
          <div className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold mb-1">
            {vals.minutes}
          </div>
          <div className="text-xs sm:text-sm">Minutes</div>
        </div>
        <div
          style={{ color: primary, backgroundColor: secondary }}
          className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 flex flex-col items-center justify-center rounded-md"
        >
          <div className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold mb-1">
            {vals.seconds}
          </div>
          <div className="text-xs sm:text-sm">Seconds</div>
        </div>
      </div>
    </div>
  );
}

export default Timer;
