import React, { useState, useEffect } from "react";
import propTypes from "prop-types";

UseTheme.propTypes = {
  topLevelRef: propTypes.object,
};

// The UseTheme hook changes the theme of the component from dark mode (default) to light mode. it is assisted by tailwind dark mode, in which giving the dark class to parent will trickle the dark mode down to the children.
// topLevelRef (object) the parent container of the page component
function UseTheme({ topLevelRef }) {
  let [theme, setTheme] = useState("dark");

  useEffect(() => {
    async function mountTheme() {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (topLevelRef) {
        if (topLevelRef.current.classList.contains("dark"))
          topLevelRef.current.classList.remove("dark");
        if (topLevelRef.current.classList.contains("light"))
          topLevelRef.current.classList.remove("light");

        topLevelRef.current.classList.add(theme);

        if (topLevelRef.current.classList.contains("light"))
          document.body.style.backgroundColor = "#f9f9fa";
        else document.body.style.backgroundColor = "#1B1B1F";
      }
    }

    mountTheme();
  }, [theme, topLevelRef]);

  return { theme, setTheme };
}

export default UseTheme;
