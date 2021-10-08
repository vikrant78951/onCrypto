import React, { useState, useEffect } from 'react';

export default function ThemeToggler() {
  const [theme, setTheme] = useState(null);
  const [themecheck, setThemecheck] = useState(null);

  const getStorage = (a) => localStorage.getItem(a);
  const setStorage = (a, b) => localStorage.setItem(a, b);

  useEffect(() => {
    if (getStorage('theme')) {
      setTheme(getStorage('theme'));
      theme == 'dark' ? setThemecheck(true) : setThemecheck(false);
    } else {
      setStorage('theme', 'light');
      setTheme('light');
    }
  }, [theme]);

  return (
    <>
      theme is {theme} and themecheck is {themecheck ? 'checked' : 'unchecked'}
    </>
  );
}
