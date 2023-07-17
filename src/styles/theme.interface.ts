export interface ColorTheme {
  primaryBackground: string;
  secondaryBackground: string;
}
export interface SpacingTheme {
  base: number;
  double: number;
  marginTop: string;
}
export interface Theme {
  id: string;
  color: ColorTheme;
  spacing: SpacingTheme;
}
