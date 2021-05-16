import React, { useReducer, useState } from "react";

import Toolbar from './Toolbar'
import ThemeContext from './ThemeContext'

const AdvancedApp3 = () => {
    const themeReducer = (state, action) => {
        console.log(action)
        if (state.color == 'light') {
            return {...state, color:'dark'};
        } else {
            return {...state, color:'light'};
        }
    }

    const [state, dispatch] = useReducer(themeReducer, {
        color: 'dark',
        size: 'normal',
        font: 'default',
    })
    return (
        <ThemeContext.Provider value={[state, dispatch]}>
            <Toolbar />
        </ThemeContext.Provider>
    )
}

export default AdvancedApp3