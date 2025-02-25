import { useState, useRef, useEffect } from 'react';
import { toast } from 'react-toastify';

import { getTimerData, getTimerLink } from '../EncoderDecoder/numberLookup';

import { useLocation, useNavigate } from 'react-router-dom';

interface Props {
  color?: string;
  color2?: string;
}

function LandingPage({ color, color2 }: Props) {
  const navigate = useNavigate();

  const location = useLocation();
  var context = getTimerData(location.pathname.substring(1));
  if (location.pathname == '/') {
    context = { time: 0, theme: { font: 0, color: 0, design: 0 } };
  }

  const [text, setText] = useState('');
  const [dateTime, setDateTime] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + 16 + 'px';
    }
  }, [text]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length <= 75) {
      setText(e.target.value);
    }
  };

  const buttonClicked = () => {
    if (text == '') {
      toast.error('Enter a heading for the countdown!');
      return;
    }

    if (dateTime == '') {
      toast.error('Select a countdown end date!');
      return;
    }

    const timestamp = new Date(dateTime).getTime();
    const themeVal =
      100 * context.theme.font +
      10 * context.theme.color +
      context.theme.design;

    new Promise((resolve) => setTimeout(resolve, 5000));
    const link = getTimerLink(timestamp, themeVal);
    navigate('/timer/' + text + '-' + link);
  };

  return (
    <div
      className="w-5/6 md:w-2/3 xl:w-1/2 flex flex-col items-center gap-4"
      style={{ color }}
    >
      <textarea
        ref={textareaRef}
        placeholder="Enter heading here..."
        className="w-full text-center text-2xl sm:text-4xl lg:text-6xl border-b-4 focus:outline-none placeholder-opacity-75 bg-transparent resize-none overflow-hidden leading-tight"
        style={{ color, borderColor: color }}
        rows={1}
        maxLength={75}
        value={text}
        onChange={handleChange}
      />

      <div className="w-5/6 sm:w-4/6 flex flex-col items-center">
        <input
          type="datetime-local"
          className="w-full text-center text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={dateTime}
          onChange={(e) => setDateTime(e.target.value)}
        />
        <div className="text-sm sm:text-md lg:text-xl">
          Select Date and Time
        </div>
      </div>
      <button
        className="text-xl px-8 py-4 rounded-2xl mt-2"
        style={{ backgroundColor: color, color: color2 }}
        onClick={buttonClicked}
      >
        Start Timer!
      </button>
    </div>
  );
}

export default LandingPage;
