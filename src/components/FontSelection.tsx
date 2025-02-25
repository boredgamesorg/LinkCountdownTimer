import { useState } from 'react';

function FontSelection() {
  const fontPairs = [
    { content: 'Abhaya Libre SemiBold' },
    { content: 'Lao Sans Pro' },
    { content: 'Limelight' },
    { content: 'Andada Pro' },
    { content: 'Averia Serif Libre' },
    { content: 'Sunshiney' },
    { content: 'Carrois Gothic SC' },
    { content: 'KoPub Batang' },
    { content: 'Hepta Slab' },
    { content: 'Comic Neue' },
  ];

  const paginatedFonts = [
    fontPairs.slice(0, 4),
    fontPairs.slice(4, 8),
    fontPairs.slice(8, 10),
  ];

  const [page, setPage] = useState(0);

  return (
    <div className="flex flex-col items-center gap-4 sm:p-4">
      <h2 className="text-4xl sm:text-5xl">Font</h2>
      <div className="flex justify-center gap-4 flex-wrap">
        {paginatedFonts[page].map((pair, index) => (
          <div
            key={index}
            className="sm:px-4 hover:border rounded-lg text-md w-28 sm:text-2xl sm:w-64 lg:text-4xl lg:w-96 h-32 flex justify-center items-center text-center"
            style={{ fontFamily: pair.content }}
          >
            The end of time for the people who care
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        {paginatedFonts.map((_, i) => (
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

export default FontSelection;
