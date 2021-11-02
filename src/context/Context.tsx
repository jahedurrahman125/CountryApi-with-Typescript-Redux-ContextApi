import React, { createContext, useState, useEffect } from 'react';


export const themeContext = createContext()

function setDataInStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch (e) {
    console.error(e.message);
  }
}

function getStorageData(key) {
  try {
    const value = window.localStorage.getItem(key)
    return value ? JSON.parse(value) : ''
  } catch (e) {
    console.error(e.message)
  }
}

const ThemeContext: React.FC = (props) => {
  const [customTheme, setCustomTheme] = useState(() => getStorageData('theme'))

  useEffect(() => {
    setDataInStorage('theme', customTheme)
  }, [customTheme])

  return (
    <themeContext.Provider value={[customTheme, setCustomTheme]}>
      {props.children}
    </themeContext.Provider>
  )
}

export default ThemeContext