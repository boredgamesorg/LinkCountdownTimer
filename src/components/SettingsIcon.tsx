import { useLocation, useNavigate } from 'react-router-dom';
import Settings from '../assets/settings.svg?react';

interface Props {
  color: string;
}

function SettingsIcon({ color }: Props) {
  const location = useLocation();
  const navigate = useNavigate();

  const toggleSettings = () => {
    const match = location.pathname.match(/^\/(settings|timer)\/([^/]+)$/);

    if (match) {
      // Case: /settings/title-timeTheme or /timer/title-timeTheme
      const [, currentRoute, context] = match;
      const newRoute = currentRoute === 'settings' ? 'timer' : 'settings';
      navigate(`/${newRoute}/${context}`);
    } else {
      // Case: /timeTheme (without '-')
      const simpleMatch = location.pathname.match(/^\/([^/-]*)$/);
      if (simpleMatch) {
        const [, simpleContext] = simpleMatch;
        navigate(`/settings/${simpleContext}`);
      } else {
        // Case: /settings/timeTheme -> /timeTheme
        const settingsMatch = location.pathname.match(/^\/settings\/([^/-]*)$/);
        if (settingsMatch) {
          const [, simpleContext] = settingsMatch;
          navigate(`/${simpleContext}`);
        }
      }
    }
  };

  return (
    <Settings
      className="absolute right-4 top-4 w-8 sm:right-8 sm:top-8 sm:w-12"
      style={{ fill: color }}
      onClick={toggleSettings}
    />
  );
}

export default SettingsIcon;
