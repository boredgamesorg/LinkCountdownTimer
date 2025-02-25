// import SettingsIcon from './assets/settings.svg';
import LandingPage from "./Screens/LandingPage";
import { Routes, Route, useLocation } from "react-router-dom";

import Timer from "./components/Timer";
import Settings from "./Screens/Settings";
import SettingsIcon from "./components/SettingsIcon";
import { getTimerData } from "./EncoderDecoder/numberLookup";
import { splitHeadingAndInfo } from "./EncoderDecoder/scripts";

import StarField from "./components/Designs/StarField";
import Trunk from "./components/Designs/Trunk";
import Clouds from "./components/Designs/Clouds";
import Net from "./components/Designs/Net";

type ThemeColors = {
  primary: string;
  secondary: string;
};

type ThemeFonts = {
  content: string;
  numbers: string;
};
const themeMap: Record<number, ThemeColors> = {
  0: { primary: "#F0EDCC", secondary: "#02343F" },
  1: { primary: "#F9EDED", secondary: "#3F418D" },
  2: { primary: "#F8EE00", secondary: "#111A24" },
  3: { primary: "#EF6B6E", secondary: "#F7ED7E" },
  4: { primary: "#FCF7F7", secondary: "#9A0001" },
  5: { primary: "#D3C5E5", secondary: "#735DA5" },
  6: { primary: "#FFF2D7", secondary: "#F98866" },
  7: { primary: "#C2DFE5", secondary: "#65A4AC" },
  8: { primary: "#F1F1F2", secondary: "#1995AD" },
  9: { primary: "#F1D3B2", secondary: "#46211A" },
};

const fontPairs: Record<number, ThemeFonts> = {
  0: { content: "Abhaya Libre SemiBold", numbers: "Bigshot One" },
  1: { content: "Lao Sans Pro", numbers: "Graduate" },
  2: { content: "Limelight", numbers: "BM HANNA" },
  3: { content: "Andada Pro", numbers: "Hahmlet" },
  4: { content: "Averia Serif Libre", numbers: "Ga Maamli" },
  5: { content: "Sunshiney", numbers: "Arbutus" },
  6: { content: "Carrois Gothic SC", numbers: "Glass Antiqua" },
  7: { content: "KoPub Batang", numbers: "Vidaloka" },
  8: { content: "Hepta Slab", numbers: "Hermeneus One" },
  9: { content: "Comic Neue", numbers: "Germania One" },
};

const designPairs: Record<number, React.FC> = {
  0: () => null,
  1: StarField,
  2: Trunk,
};

function switchFont(input?: number): ThemeFonts {
  if (!input) {
    return fontPairs[0];
  }
  return fontPairs[input] || fontPairs[0];
}

function switchTheme(input?: number): ThemeColors {
  if (!input) {
    return themeMap[0];
  }
  return themeMap[input] || themeMap[0];
}

function switchDesign(input?: number): React.FC {
  return designPairs[input || 0] || designPairs[0];
}

function Handler() {
  const location = useLocation();
  const path = splitHeadingAndInfo(location.pathname);
  console.log(path);
  const themeData = getTimerData(path.info);
  console.log(themeData);

  const colours: ThemeColors = switchTheme(themeData.theme.color);
  const fonts: ThemeFonts = switchFont(themeData.theme.font);
  const BackgroundDesign = switchDesign(themeData.theme.design);

  return (
    <div
      className="w-screen h-screen flex flex-col justify-center items-center relative"
      style={{ backgroundColor: colours.primary, fontFamily: fonts.content }}
    >
      <BackgroundDesign />
      <SettingsIcon color={colours.secondary} />
      <Routes>
        <Route
          path="/*"
          element={
            <LandingPage color={colours.secondary} color2={colours.primary} />
          }
        />
        <Route path="/settings/*" element={<Settings />} />
        <Route
          path="/timer/:context"
          element={
            <Timer primary={colours?.primary} secondary={colours?.secondary} />
          }
        />
      </Routes>
      <div
        className="text-xs sm:text-sm absolute right-4 bottom-4"
        style={{ color: colours?.secondary }}
      >
        A project by{" "}
        <span className="underline">
          <a href="https://github.com/poseidon0z">Poseidon0z</a>
        </span>{" "}
        and{" "}
        <span className="underline">
          <a href="https://github.com/Azaken1248">Azaken</a>
        </span>
      </div>
    </div>
  );
}

export default Handler;
