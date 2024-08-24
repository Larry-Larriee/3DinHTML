import React, { useState, useEffect } from "react";

// The UseTheme hook changes the theme of the component from dark mode (default) to light mode. it is assisted by tailwind dark mode, in which giving the dark class to parent will trickle the dark mode down to the children.
// furthermore, the theme is stored in local storage so the user's theme preference is saved. when the local storage is changed with the toggle, the setTheme is also updated to reflect the local storage value
// topLevelRef (object) the parent container of the page component
function UseTheme() {
  let [theme, setTheme] = useState();

  useEffect(() => {
    const bodyClasslist = document.body.classList;

    // default dark mode styling
    if (!localStorage.getItem("theme")) localStorage.setItem("theme", "dark");
    setTheme(localStorage.getItem("theme"));

    // remove the current theme class so there is room to add the new theme (no conflicts)
    if (bodyClasslist.contains("dark")) bodyClasslist.remove("dark");
    if (bodyClasslist.contains("light")) bodyClasslist.remove("light");

    bodyClasslist.add(theme);
  }, [theme]);

  // thanks to tailwind, the dark class of the parent trickles down to the children (we don't need to pass the theme state to children)
  // the only expection is the iframe, which uses srcdoc and therefores doesn't have tailwind capabilities, so we can pass the theme state to it and thats it
  let toggleTheme = () => {
    if (localStorage.getItem("theme") === "dark") {
      localStorage.setItem("theme", "light");
      setTheme(localStorage.getItem("theme"));
    } else {
      localStorage.setItem("theme", "dark");
      setTheme(localStorage.getItem("theme"));
    }
  };

  return { theme, toggleTheme };
}

export default UseTheme;
