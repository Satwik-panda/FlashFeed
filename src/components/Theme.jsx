import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { FaSun, FaMoon } from 'react-icons/fa';

const Theme = () => {
  const theme=useContext(ThemeContext);
  console.log(theme.state.darkMode)
  const mode=theme.state.darkMode;

  function toggleTheme(){
    let ret=theme.dispatch({type: "TOOGLE"});
    console.log("clicked!!! and returned:",ret)
    console.log("mode",mode);
  }

  return (
      <div
        className={`relative mt-4 w-14 h-8 rounded-full border shadow-inner cursor-pointer ${mode ? 'bg-gray-700 border-gray-500' : 'bg-white border-gray-300'}`}
        onClick={toggleTheme}
      >
        <div
          className={`absolute top-1 left-1 w-6 h-6 rounded-full shadow-md transform transition-transform ${mode ? 'translate-x-6 bg-white' : 'bg-gray-300'}`}
        >
          <FaSun
            className={`absolute inset-0 m-auto w-4 h-4 text-yellow-500 transform transition-opacity flex items-center justify-center ${
              mode ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <FaMoon
            className={`absolute inset-0 m-auto w-4 h-4 text-blue-500 transform transition-opacity flex items-center justify-center ${
              mode ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>
      </div>
  )
}

export default Theme
