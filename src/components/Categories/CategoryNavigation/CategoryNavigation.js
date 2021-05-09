import { NavLink } from 'react-router-dom'

const active = `
.active {
    background-color: lightgreen !important
}`
const CategoryNavigation = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><NavLink to="/categories/all">All</NavLink></li>
                <li><NavLink to="/categories/Cat">Cats</NavLink></li>
                <li><NavLink to="/categories/Dog">Dogs</NavLink></li>
                <li><NavLink to="/categories/Parrot">Parrots</NavLink></li>
                <li><NavLink to="/categories/Reptile">Reptiles</NavLink></li>
                <li><NavLink to="/categories/Other">Other</NavLink></li>
                <style jsx>{active}</style>
            </ul>
        </nav>
    )
}

export default CategoryNavigation