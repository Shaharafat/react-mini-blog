import React, { createContext } from "react";
export let themes = {
  light: {
    font: "#2f3542",
    fontRed: "#FF0000",
    border: "#B5B5B5",
    foreground: "#FBFCFC",
    background: "#ECF0F1",
    hover: "#ecf0f1",
    toggle: "#242526",
  },
  dark: {
    font: "#FBFCFC",
    fontRed: "#FF0000",
    border: "#ECF0F1",
    foreground: "#242526",
    background: "#18191A",
    hover: "#18191A",
    toggle: "#fbfcfc",
  }
};

export const ThemeContext = createContext(themes.dark);
