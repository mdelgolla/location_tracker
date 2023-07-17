
import { ColorTheme, SpacingTheme, Theme } from "./theme.interface";

const DEFAULT_COLOR_THEME: ColorTheme = {
  primaryBackground: "",
  secondaryBackground: "",


};
const DEFAULT_SPACING_THEME: SpacingTheme = {
  base: 8,
  double: 16,
  marginTop: "16@vs",
};

export const DEFAULT_THEME_ID = "default-light";
export const DEFAULT_THEME: Theme = {
  id: DEFAULT_THEME_ID,
  color: DEFAULT_COLOR_THEME,
  spacing: DEFAULT_SPACING_THEME,
};
