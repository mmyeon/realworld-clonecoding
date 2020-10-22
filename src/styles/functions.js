import { css } from "styled-components";

export function setMaxWidthMediaQuery(styles, deviceSize) {
  return css`
    @media all and (max-width: ${deviceSize}) {
      ${styles}
    }
  `;
}

export function setMinWidthMediaQuery(styles, deviceSize) {
  return css`
    @media all and (min-width: ${deviceSize}) {
      ${styles}
    }
  `;
}
