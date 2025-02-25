import ColourSelection from '../components/ColourSelection';
import DesignSelection from '../components/DesignSelection';
import FontSelection from '../components/FontSelection';
import Arrow from '../assets/arrow.svg?react';
import { useNavigate } from 'react-router-dom';

interface Props {
  color: string;
}

function Settings({ color }: Props) {
  const navigate = useNavigate();

  const exitSettings = () => {
    const path = location.pathname;

    // Case: /settings/heading-data -> /timer/heading-data
    if (/^\/settings\/[^/-]+-[^/]+$/.test(path)) {
      navigate(path.replace('/settings/', '/timer/'));
    }
    // Case: /settings/-data -> /-data
    else if (/^\/settings\/-?[^/]*$/.test(path)) {
      navigate(path.replace('/settings/', '/'));
    }
  };

  return (
    <>
      <Arrow
        className="absolute top-8 left-8"
        style={{ fill: color, stroke: color }}
        onClick={exitSettings}
      />
      <div className="m-4 my-24 z-10">
        <FontSelection />
        <ColourSelection />
        <DesignSelection />
      </div>
    </>
  );
}

export default Settings;
