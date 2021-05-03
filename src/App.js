import { Route, Switch } from 'react-router-dom'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Categories from './components/Categories/Categories'
import PetDetails from './components/PetDetails/PetDetails'
import DemoPage from './components/Demo/DemoPage'
import DemoPage2 from './components/Demo/DemoPage2'

import './App.css';

function App() {
  return (
    <div className="container">
      <Header />

      <Switch>
        <Route path='/' exact component={Categories} />
        <Route path='/categories/:category' exact component={Categories} />
        <Route path='/pets/details/:petId' exact component={PetDetails} />
        <Route path='/demo' exact component={DemoPage} />
        <Route path='/demo2' exact component={DemoPage2} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;


// 9 lekcia/ 1:49