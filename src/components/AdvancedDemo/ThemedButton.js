import React, { Component } from "react";

import Button from './Button'
import Header from './Header'
import ThemeContext from './ThemeContext'

class ThemedButton extends Component {

    componentDidMount() {
        console.log(this.context)
    }

    render() {
        return (
            <>
                <Header />
                <Button
                    theme={this.context.theme}
                    buttonClickHandler={this.context.onChnageThemeHandler} />
            </>
        )
    }
}

ThemedButton.contextType = ThemeContext

export default ThemedButton