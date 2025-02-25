import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getTimerLink } from '../EncoderDecoder/numberLookup';

function ColourSelection() {
  const location = useLocation();
  const navigate = useNavigate();

  const themeMap = [
    { primary: '#F0EDCC', secondary: '#02343F' },
    { primary: '#F9EDED', secondary: '#3F418D' },
    { primary: '#F8EE00', secondary: '#111A24' },
    { primary: '#EF6B6E', secondary: '#F7ED7E' },
    { primary: '#FCF7F7', secondary: '#9A0001' },
    { primary: '#D3C5E5', secondary: '#735DA5' },
    { primary: '#FFF2D7', secondary: '#F98866' },
    { primary: '#C2DFE5', secondary: '#65A4AC' },
    { primary: '#F1F1F2', secondary: '#1995AD' },
    { primary: '#000000', secondary: '#FFFFFF' },
  ];

  const paginatedThemes = [
    themeMap.slice(0, 4),
    themeMap.slice(4, 8),
    themeMap.slice(8, 10),
  ];

  const [page, setPage] = useState(0);
  const changeTheme = (index: number) => {
    var path = location.pathname;
    if (path.endsWith('/')) {
      const current = new Date().getTime();
      const link = getTimerLink(current, 0);
      path = path + '-' + link;
    }

    path = path.slice(0, -2) + (index + 4 * page) + '0';
    navigate(path);
  };
  return (
    <div className="flex flex-col items-center gap-4 p-4 w-full my-4">
      <h2 className="text-4xl sm:text-5xl">Color</h2>
      <div className="flex justify-center gap-4 w-full flex-wrap">
        {paginatedThemes[page].map((theme, index) => (
          <div
            key={index}
            className="rounded-lg w-24 h-24 sm:w-64 sm:h-48 lg:w-96 flex justify-center items-center text-center border-2 border-[#282828] hover:border-8 overflow-hidden"
            onClick={() => changeTheme(index)}
          >
            <div
              className="w-full h-full flex justify-center items-center"
              style={{ backgroundColor: theme.primary }}
            >
              <div
                className="w-1/2 h-1/2"
                style={{ backgroundColor: theme.secondary }}
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

export default ColourSelection;
