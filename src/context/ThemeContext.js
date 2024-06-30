import React, { createContext, useReducer } from "react";

export const ThemeContext = createContext();

const INITIAL_STATE={darkMode: false};

const themeReducer=(state, action)=>{
    switch(action.type){
        case "TOOGLE":
            return {...state, darkMode: !state.darkMode};
        default:
            return state;
    }
}

const ThemeContextProvider=({children})=>{
    const [state, dispatch]= useReducer(themeReducer, INITIAL_STATE)
    return <ThemeContext.Provider value={{state, dispatch}}>
        {children}
    </ThemeContext.Provider>
}
export default ThemeContextProvider