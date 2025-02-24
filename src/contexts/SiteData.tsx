import { createContext } from "react";

export interface Theme {
  font: number;
  color: number;
  design: number;
}

interface MyContextType {
  heading: string;
  setHeading: (newValue: string) => void;
  timeStamp: number;
  setTimeStamp: (newValue: number) => void;
  theme: Theme;
  setTheme: (newValue: Theme) => void;
}

// Provide a default value but ensure it's properly typed
export const SiteData = createContext<MyContextType>({heading: "",
  setHeading: () => {},
  timeStamp: 0,
  setTimeStamp: () => {},
  theme: { font: 0, color: 0, design: 0 },
  setTheme: () => {},});
