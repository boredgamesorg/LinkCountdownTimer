import { createContext } from 'react';

interface Theme {
  font: number;
  color: number;
  design: number;
}

interface MyContextType {
  heading: string | undefined;
  setHeading: (newValue: string) => void;
  timeStamp: number | undefined;
  setTimeStamp: (newValue: number) => void;
  theme: Theme | undefined;
  setTheme: (newValue: Theme) => void;
}

// Provide a default value but ensure it's properly typed
export const SiteData = createContext<MyContextType | undefined>(undefined);
