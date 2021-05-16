import React, { Component } from "react";

import Toolbar from './Toolbar'
import ThemeContext from './ThemeContext'

class AdvancedApp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentTheme: 'dark'
        }
    }

    onChnageThemeHandler() {
        this.setState(oldState => oldState.currentTheme == 'dark' ? { currentTheme: 'light' } : { currentTheme: 'dark' })
    }

    render() {
        return (
            <ThemeContext.Provider value={{ theme: this.state.currentTheme, onChnageThemeHandler:this.onChnageThemeHandler.bind(this) }}>
                <Toolbar/>
            </ThemeContext.Provider>
        )
    }
}

export default AdvancedApp