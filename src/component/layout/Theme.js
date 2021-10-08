import React, { useState, useEffect } from 'react';

export default function () {
  const [theme, setTheme] = useState(null);
  const [themecheck, setThemeCheck] = useState(null);

  const setStorage = (a, b) => localStorage.setItem(a, b);
  const getStorage = (a) => localStorage.getItem(a);

  useEffect(() => {
    if (getStorage('theme')) {
      setTheme(getStorage('theme'));
      theme == 'dark' ? setThemeCheck(true) : setThemeCheck(false);
    } else {
      localStorage.setItem('theme', 'light');
      setTheme(getStorage('theme'));
    }
    updateTheme();
  }, [theme]);

  const updateTheme = () => {
    document.body.className = theme;
  };

  const changeTheme = (e) => {
    if (e.target.checked) {
      setStorage('theme', 'dark');
      setTheme('dark');
      setThemeCheck(true);
      updateTheme();
    } else {
      setStorage('theme', 'light');
      setTheme('light');
      setThemeCheck(false);
      updateTheme();
    }
  };

  return (
    <>
      theme is {theme}
      <div className="container themeContainer">
        <h1 className="heading">Header</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab omnis
          harum molestiae perferendis, voluptas nostrum quam provident dolores
          commodi doloribus dolor necessitatibus repellat voluptatibus
          accusantium aliquid distinctio, voluptatem perspiciatis asperiores.
        </p>
        <button className="btn">change state</button>
        <br />
        <strong>choose theme : </strong>
        {themecheck ? (
          <input
            type="checkbox"
            name="themeToggler"
            checked
            onChange={changeTheme}
          />
        ) : (
          <input type="checkbox" name="themeToggler" onChange={changeTheme} />
        )}
      </div>
    </>
  );
}
