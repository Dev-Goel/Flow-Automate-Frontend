import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    name: "light" | "dark";
    bg: string;
    surface: string;
    text: string;
    border: string;
    accent: string;
    accentText: string;
  }
}