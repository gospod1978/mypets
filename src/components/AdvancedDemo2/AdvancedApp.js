import React, { useState } from "react";

import Toolbar from './Toolbar'
import ThemeContext from './ThemeContext'

const AdvancedApp2 = () => {
    const [theme, setTheme] = useState('dark')

    return (
        <ThemeContext.Provider value={[theme, setTheme]}>
            <Toolbar />
        </ThemeContext.Provider>
    )
}

export default AdvancedApp2