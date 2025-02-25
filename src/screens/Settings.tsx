import ColourSelection from '../components/ColourSelection';
import DesignSelection from '../components/DesignSelection';
import FontSelection from '../components/FontSelection';
import Arrow from '../assets/arrow.svg?react';
import { useNavigate } from 'react-router-dom';

function Settings() {
  const navigate = useNavigate();

  const exitSettings = () => {
    navigate(-1);
  };

  return (
    <>
      <Arrow className="absolute top-8 left-8" onClick={exitSettings} />
      <div className="m-4 my-24">
        <FontSelection />
        <ColourSelection />
        <DesignSelection />
      </div>
    </>
  );
}

export default Settings;
