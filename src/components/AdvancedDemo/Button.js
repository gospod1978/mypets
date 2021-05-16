function Button({
    theme,
    buttonClickHandler
}) {
    return (
        <button
            onClick={buttonClickHandler}
            style={{ background: theme == 'dark' ? 'darkgray' : 'lightgreen' }}>
            {theme}
        </button>
    )
}

export default Button