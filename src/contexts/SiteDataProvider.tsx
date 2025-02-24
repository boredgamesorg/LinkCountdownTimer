import { useState, ReactNode } from "react";
import { SiteData, Theme } from "./SiteData";

interface MyProviderProps {
  children: ReactNode;
}

export const SiteDataProvider = ({ children }: MyProviderProps) => {
  const [heading, setHeading] = useState<string>('');
  const [timeStamp, setTimeStamp] = useState<number>(0);
  const [theme, setTheme] = useState<Theme>({ font: 0, color: 0, design: 0 });

  return (
    <SiteData.Provider
      value={{ heading, setHeading, timeStamp, setTimeStamp, theme, setTheme }}
    >
      {children}
    </SiteData.Provider>
  );
};
