import { useLocation, useNavigate } from 'react-router-dom';
import Settings from '../assets/settings.svg?react';

interface Props {
  color: string;
}

function SettingsIcon({ color }: Props) {
  const location = useLocation();
  const navigate = useNavigate();

  const toggleSettings = () => {
    const path = location.pathname;

    // Case: /settings/heading-data -> /timer/heading-data
    if (/^\/settings\/[^/-]+-[^/]+$/.test(path)) {
      navigate(path.replace('/settings/', '/timer/'));
    }
    // Case: /settings/-data -> /-data
    else if (/^\/settings\/-?[^/]*$/.test(path)) {
      navigate(path.replace('/settings/', '/'));
    }
    // Case: /timer/heading-data -> /settings/heading-data
    else if (/^\/timer\/[^/]+$/.test(path)) {
      navigate(path.replace('/timer/', '/settings/'));
    }
    // Case: / or /-data -> /settings/ or /settings/-data
    else if (/^\/(-[^/]*)?$/.test(path)) {
      navigate(`/settings${path}`);
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
