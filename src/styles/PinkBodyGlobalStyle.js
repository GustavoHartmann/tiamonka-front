import { createGlobalStyle } from "styled-components";
import { LIGHTER_THEME_COLOR } from "../assets/constants";

export const PinkBody = createGlobalStyle`
  body {
    background-color: ${LIGHTER_THEME_COLOR};
  }
  `;
