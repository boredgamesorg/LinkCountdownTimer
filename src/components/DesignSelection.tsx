import { useState } from 'react';
import Stars from '../assets/designs/stars.gif';
import Trunk from '../assets/designs/trunk.gif';
import Placeholder from '../assets/placeholder.png';
import { getTimerLink } from '../EncoderDecoder/numberLookup';
import { useLocation, useNavigate } from 'react-router-dom';

function DesignSelection() {
  const location = useLocation();
  const navigate = useNavigate();

  const designMap = [
    [Placeholder, '1'],
    [Stars, '9'],
    [Trunk, '9'],
  ];

  const paginatedThemes = [designMap.slice(0, 4)];

  const [page, setPage] = useState(0);

  const changeDesign = (index: number) => {
    var path = location.pathname;
    if (path.endsWith('/')) {
      const current = new Date().getTime();
      const link = getTimerLink(current, 0);
      path = path + '-' + link;
    }
    path = path.slice(0, -2) + designMap[index][1] + path.slice(-1);
    path = path.slice(0, -1) + (index + 4 * page);
    navigate(path);
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4 w-full">
      <h2 className="text-4xl sm:text-5xl">Design</h2>
      <div className="flex justify-center gap-4 w-full flex-wrap">
        {paginatedThemes[page].map((design, index) => (
          <div
            key={index}
            onClick={() => changeDesign(index)}
            className="rounded-lg w-24 h-24 sm:w-64 sm:h-48 lg:w-96 flex justify-center items-center text-center border-2 border-[#282828] hover:border-8 overflow-hidden"
          >
            <div className="w-full h-full flex justify-center items-center">
              <img
                src={design[0]}
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
