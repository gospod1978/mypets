import { useEffect, useState } from 'react'
import { Route, Switch , Redirect} from 'react-router-dom'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Categories from './components/Categories/Categories'
import PetDetails from './components/PetDetails/PetDetails'
import EditPetDetails from './components/EditPetDetails/EditPetDetails'
import CreatePet from './components/CreatePet/CreatePet'
import EditPet from './components/EditPet/EditPet'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Demo from './components/Demo/Demo'
import Advanced from './components/AdvancedDemo/Advanced'
import Advanced2 from './components/AdvancedDemo2/Advanced'
import Advanced3 from './components/AdvancedDemo3/Advanced'
import { auth } from './utils/firebase'
import './App.css';

function App() {

  const [user, setUser] = useState(null)

  useEffect(() => { auth.onAuthStateChanged(setUser) }, [])
  //THE SAME
  // useEffect(() => {
  //   auth.onAuthStateChanged((authUser) => {
  //     if (authUser) {
  //       setUser(authUser)
  //     } else {
  //       setUser(null)
  //     }
  //   })
  // }, [])

  const authInfo = {
    isAuthenticated: Boolean(user),
    user: user?.email
  }

  return (
    <div className="container">
      <Header {...authInfo}/>

      <Switch>
        <Route path='/' exact render={props => <Categories {...props} {...authInfo}/>} />
        <Route path='/categories/:category' render={props => <Categories {...props} {...authInfo} />} />
        <Route path='/pets/details/:petId' exact render={props => <PetDetails {...props} {...authInfo}/>} />
        <Route path='/pets/details/:petId/edit' exact render={props => <EditPetDetails {...props} {...authInfo}/>} />
        <Route path='/pets/create' exact render={props => <CreatePet {...props} {...authInfo}/>} />
        <Route path='/pets/:petId/edit' exact render={props => <EditPet {...props} {...authInfo} />} />
        <Route path='/demo' exact component={Demo} />
        <Route path='/logout' render={() => {
          auth.signOut()
          return <Redirect to="/"/>
        }}/>
        <Route path='/login' exact component={Login} />
        <Route path='/register' exact component={Register}/>
        <Route path='/advanced' exact component={Advanced}/>
        <Route path='/advanced2' exact component={Advanced2}/>
        <Route path='/advanced3' exact component={Advanced3}/>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;


// 14 last lekcia