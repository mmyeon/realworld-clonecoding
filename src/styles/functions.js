import { css } from "styled-components";

// xs xxs md ls

/** 모바일 size용 스타일 */
export function mobile(maxWidth, styles) {
  if (maxWidth === "xs") {
    return css`
      @media (max-width: ${`${maxWidth}px`}) {
        ${styles}
      }
    `;
  }
}
