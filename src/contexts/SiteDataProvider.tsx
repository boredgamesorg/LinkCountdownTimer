import { useState, ReactNode } from 'react';
import { SiteData } from './SiteData';

interface MyProviderProps {
  children: ReactNode;
}

interface Theme {
  font: number;
  color: number;
  design: number;
}

export const SiteDataProvider = ({ children }: MyProviderProps) => {
  const [heading, setHeading] = useState<string>();
  const [timeStamp, setTimeStamp] = useState<number>();
  const [theme, setTheme] = useState<Theme>();

  return (
    <SiteData.Provider
      value={{ heading, setHeading, timeStamp, setTimeStamp, theme, setTheme }}
    >
      {children}
    </SiteData.Provider>
  );
};
