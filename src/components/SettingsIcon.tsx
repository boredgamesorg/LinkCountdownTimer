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
      const [, currentRoute, context] = match;
      const newRoute = currentRoute === 'settings' ? 'timer' : 'settings';
      navigate(`/${newRoute}/${context}`);
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
