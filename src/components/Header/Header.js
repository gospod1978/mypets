import { Link } from 'react-router-dom'

const Header = () => {
    let userName = 'Pesho'
    const changeName = (e) => {
        e.preventDefault()
        console.log(userName)
        if(userName !== 'Pesho') {
            userName = 'Pesho'
        } else {
            userName = ''
        }
    }
    const viewButton = () => {
        if(userName !== 'Pesho') {
            return (
                <div className="second-bar">
                    <ul>
                        <li>Welcome, {userName}!</li>
                        <li><a href="/" onClick={changeName}><i className="fas fa-sign-out-alt"></i> Logout</a></li>
                    </ul>
                </div>
            )
        } else {
            return (
                <section className="navbar-anonymous">
                    <ul>
                        <li className="navbar-margin"><Link onClick={changeName} to="/"><i className="fas fa-user-plus"></i> Register</Link></li>
                        <li><Link onClick={changeName} to="/"><i className="fas fa-sign-in-alt"></i> Login</Link></li>
                    </ul>
                </section>
            )
        }
    }
    return (
        <header id="site-header">
            <nav className="navbar">

                <section className="navbar-dashboard">
                    <div className="first-bar">
                        <Link to="/">Dashboard</Link>
                        <Link className="button" to="/">My Pets</Link>
                        <Link className="button" to="/pets/create">Add Pet</Link>
                    </div>
                    {viewButton()}
                    {/* {userName !=='' ?
                        <div className="second-bar">
                            <ul>
                                <li>Welcome, {userName}!</li>
                                <li><a href="/" onClick={changeName}><i className="fas fa-sign-out-alt"></i> Logout</a></li>
                            </ul>
                        </div>
                    : <section className="navbar-anonymous">
                            <ul>
                                <li className="navbar-margin"><Link onClick={changeName} to="/"><i className="fas fa-user-plus"></i> Register</Link></li>
                                <li><Link onClick={changeName} to="/"><i className="fas fa-sign-in-alt"></i> Login</Link></li>
                            </ul>
                        </section>
                    } */}
                </section>
            </nav>
        </header>
    )
}

export default Header

