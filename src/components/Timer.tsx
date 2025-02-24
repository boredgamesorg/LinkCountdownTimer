interface Props {
  header?: string;
  primary?: string;
  secondary?: string;
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

function Timer({
  header = "The end of time for the people who care",
  primary,
  secondary,
  days = 32,
  hours = 32,
  minutes = 32,
  seconds = 32,
}: Props) {
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
          <div className="text-4xl font-bold m-2">{days}</div>
          <div className="text-sm">Days</div>
        </div>
        <div
          style={{ color: primary, backgroundColor: secondary }}
          className="w-28 h-28 flex flex-col items-center justify-center rounded-md"
        >
          <div className="text-4xl font-bold m-2">{hours}</div>
          <div className="text-sm">Hours</div>
        </div>
        <div
          style={{ color: primary, backgroundColor: secondary }}
          className="w-28 h-28 flex flex-col items-center justify-center rounded-md"
        >
          <div className="text-4xl font-bold m-2">{minutes}</div>
          <div className="text-sm">Minutes</div>
        </div>
        <div
          style={{ color: primary, backgroundColor: secondary }}
          className="w-28 h-28 flex flex-col items-center justify-center rounded-md"
        >
          <div className="text-4xl font-bold m-2">{seconds}</div>
          <div className="text-sm">Seconds</div>
        </div>
      </div>
    </div>
  );
}

export default Timer;
