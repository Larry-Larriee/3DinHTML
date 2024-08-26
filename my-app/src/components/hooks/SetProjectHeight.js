import React from "react";
import { useMediaQuery } from "react-responsive";

const projectHeights = {
  sm: 800,
  md: 850,
  lg: 875,
  xl: 550,
  "2xl": 500,
  "3xl": 500,
};

// setProjectHeight is assumed to be similar to react hook (must have capital letter) when containing useMediaQuery
// when using max-width media queries, the const will be true if the screen is smaller or equal to the max-width value
export default function SetProjectHeight() {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 375px)" });
  const isMediumScreen = useMediaQuery({ query: "(max-width: 412px)" });
  const isLargeScreen = useMediaQuery({ query: "(max-width: 810px)" });
  const isXLargeScreen = useMediaQuery({ query: "(max-width: 1280px)" });
  const is2XLargeScreen = useMediaQuery({ query: "(max-width: 1440px)" });
  const is3XLargeScreen = useMediaQuery({ query: "(max-width: 1536px)" });

  if (isSmallScreen) return projectHeights.sm;
  if (isMediumScreen) return projectHeights.md;
  if (isLargeScreen) return projectHeights.lg;
  if (isXLargeScreen) return projectHeights.xl;
  if (is2XLargeScreen) return projectHeights["2xl"];
  if (is3XLargeScreen) return projectHeights["3xl"];
}
