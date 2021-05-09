import { Route, Switch } from 'react-router-dom'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Categories from './components/Categories/Categories'
import PetDetails from './components/PetDetails/PetDetails'
import EditPetDetails from './components/EditPetDetails/EditPetDetails'
import CreatePet from './components/CreatePet/CreatePet'
import EditPet from './components/EditPet/EditPet'
import './App.css';

function App() {
  return (
    <div className="container">
      <Header />

      <Switch>
        <Route path='/' exact component={Categories} />
        <Route path='/categories/:category' exact component={Categories} />
        <Route path='/pets/details/:petId' exact component={PetDetails} />
        <Route path='/pets/details/:petId/edit' exact component={EditPetDetails} />
        <Route path='/pets/create' exact component={CreatePet} />
        <Route path='/pets/:petId/edit' exact component={EditPet} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;


// 10 lekcia