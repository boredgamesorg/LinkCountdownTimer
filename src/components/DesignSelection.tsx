import { useState } from 'react';
import placeholder from '../assets/placeholder.png';

function DesignSelection() {
  const themeMap: Record<number, { primary: string; secondary: string }> = {
    0: { primary: '#F0EDCC', secondary: '#02343F' },
    1: { primary: '#F9EDED', secondary: '#3F418D' },
    2: { primary: '#F8EE00', secondary: '#111A24' },
    3: { primary: '#EF6B6E', secondary: '#F7ED7E' },
    4: { primary: '#FCF7F7', secondary: '#9A0001' },
    5: { primary: '#D3C5E5', secondary: '#735DA5' },
    6: { primary: '#FFF2D7', secondary: '#F98866' },
    7: { primary: '#C2DFE5', secondary: '#65A4AC' },
    8: { primary: '#F1F1F2', secondary: '#1995AD' },
    9: { primary: '#F1D3B2', secondary: '#46211A' },
  };

  const themeEntries = Object.entries(themeMap);
  const paginatedThemes = [
    themeEntries.slice(0, 4),
    themeEntries.slice(4, 8),
    themeEntries.slice(8, 10),
  ];

  const [page, setPage] = useState(0);

  return (
    <div className="flex flex-col items-center gap-4 p-4 w-full">
      <h2 className="text-4xl sm:text-5xl">Design</h2>
      <div className="flex justify-center gap-4 w-full flex-wrap">
        {paginatedThemes[page].map(([key, theme]) => (
          <div
            id={theme.primary}
            key={key}
            className="rounded-lg w-24 h-24 sm:w-64 sm:h-48 lg:w-96 flex justify-center items-center text-center border-2 border-[#282828] hover:border-8 overflow-hidden"
          >
            <div className="w-full h-full flex justify-center items-center">
              <img
                src={placeholder}
                alt="Design Preview"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        {paginatedThemes.map((_, i) => (
          <button
            key={i}
            className={`px-4 py-2 rounded-md ${
              page === i ? 'bg-blue-500 text-white' : 'bg-gray-300'
            }`}
            onClick={() => setPage(i)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default DesignSelection;
