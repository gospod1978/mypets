import { Link } from 'react-router-dom'
import { useEffect } from 'react/cjs/react.development'
import { auth } from '../../utils/firebase'

const Header = ({
    user
}) => {

    
    useEffect(() => {
        if (user) {
        auth.currentUser.getIdToken()
            .then(function(idToken) {
                return fetch('http://localhost:5001', {
                    headers: {
                        'Authorization': idToken 
                    }
                })
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
        }
    }, [user])

    return (
        <header id="site-header">
            <nav className="navbar">

                <section className="navbar-dashboard">
                    <div className="first-bar">
                        <Link to="/">Dashboard</Link>
                        <Link className="button" to="/">My Pets</Link>
                        <Link className="button" to="/pets/create">Add Pet</Link>
                    </div>
                    {user == null ?
                        <section className="navbar-anonymous">
                            <ul>
                                <li className="navbar-margin"><Link to="/register"><i className="fas fa-user-plus"></i> Register</Link></li>
                                <li><Link to="/login"><i className="fas fa-sign-in-alt"></i> Login</Link></li>
                            </ul>
                        </section>
                        :
                        <div className="second-bar">
                            <ul>
                                <li>Welcome, {user}!</li>
                                <li><Link to="/logout"><i className="fas fa-sign-out-alt"></i> Logout</Link></li>
                            </ul>
                        </div>
                    }
                </section>
            </nav>
        </header>
    )

}

export default Header

