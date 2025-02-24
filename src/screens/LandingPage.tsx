import { useState, useRef, useEffect } from 'react';

interface Props {
  color?: string;
}

function LandingPage({ color }: Props) {
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
    </div>
  );
}

export default LandingPage;
