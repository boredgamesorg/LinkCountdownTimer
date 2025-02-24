import { useState, ReactNode } from "react";
import { SiteData, Theme } from "./SiteData";

interface MyProviderProps {
  children: ReactNode;
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
