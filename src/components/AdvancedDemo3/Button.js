import ThemeContext from './ThemeContext'

function Button({
    theme,
    buttonClickHandler
}) {
    return (
        <ThemeContext.Consumer>
            {values =>
            <button
                onClick={buttonClickHandler}
                style={{ background: values[0].color == 'dark' ? 'darkgray' : 'lightgreen' }}>
                {values[0].color}
            </button>
            }
        </ThemeContext.Consumer>
    )
}

export default Button