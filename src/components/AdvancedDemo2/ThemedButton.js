import React, { useContext } from "react";

import Button from './Button'
import Header from './Header'
import ThemeContext from './ThemeContext'

const ThemedButton = () =>  {

    const [theme, setTheme] = useContext(ThemeContext)

    const onChnageThemeHandler = () => {
        setTheme(oldState => oldState == 'dark' ? 'light' : 'dark')
    }
        return (
            <>
                <Header />
                <Button buttonClickHandler={onChnageThemeHandler} />
            </>
        )
}

ThemedButton.contextType = ThemeContext

export default ThemedButton