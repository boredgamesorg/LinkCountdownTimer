import { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { getTimerData } from '../EncoderDecoder/numberLookup';

interface Props {
  primary: string;
  secondary: string;
}

const splitHeadingAndInfo = (
  input: string
): { heading: string; info: string } => {
  const lastDashIndex = input.lastIndexOf('-');

  if (lastDashIndex === -1) {
    return { heading: input, info: '' }; // No '-' found, assume entire string is the heading
  }

  return {
    heading: input.substring(0, lastDashIndex),
    info: input.substring(lastDashIndex + 1),
  };
};

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

  const result = splitHeadingAndInfo(context || 'Error, check the link');

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
    <div className="w-7/12 flex flex-col justify-center items-center">
      <div
        style={{ color: secondary }}
        className="font-bold text-[64px] text-center w-full"
      >
        {header}
      </div>

      <div className="flex justify-center gap-2.5 w-3/4 mt-4">
        <div
          style={{ color: primary, backgroundColor: secondary }}
          className="w-28 h-28 flex flex-col items-center justify-center rounded-md"
        >
          <div className="text-4xl font-bold m-2">{vals.days}</div>
          <div className="text-sm">Days</div>
        </div>
        <div
          style={{ color: primary, backgroundColor: secondary }}
          className="w-28 h-28 flex flex-col items-center justify-center rounded-md"
        >
          <div className="text-4xl font-bold m-2">{vals.hours}</div>
          <div className="text-sm">Hours</div>
        </div>
        <div
          style={{ color: primary, backgroundColor: secondary }}
          className="w-28 h-28 flex flex-col items-center justify-center rounded-md"
        >
          <div className="text-4xl font-bold m-2">{vals.minutes}</div>
          <div className="text-sm">Minutes</div>
        </div>
        <div
          style={{ color: primary, backgroundColor: secondary }}
          className="w-28 h-28 flex flex-col items-center justify-center rounded-md"
        >
          <div className="text-4xl font-bold m-2">{vals.seconds}</div>
          <div className="text-sm">Seconds</div>
        </div>
      </div>
    </div>
  );
}

export default Timer;
