import React, { useContext } from "react";

import Button from './Button'
import Header from './Header'
import ThemeContext from './ThemeContext'

const ThemedButton = () =>  {

    const [theme, dispatch] = useContext(ThemeContext)

    const onChnageThemeHandler = () => {
        dispatch('Pesho')
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