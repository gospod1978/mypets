import { useContext } from 'react'
import ThemeContext from './ThemeContext'

const Header = ({

}) => {
    const themeContext = useContext(ThemeContext) // all
    const [theme] = useContext(ThemeContext) // tova e samo theme
    return (
        <header style={{color: theme.color == 'dark' ? 'lightgreen' : 'darkgray'}}>
            <h1>Some coll Title Here</h1>
            <p>Occaecat eiusmod ea ea elit id commodo nisi commodo et ut veniam et ad.</p>
        </header>
    )
}

export default Header