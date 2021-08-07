import {useEffect} from "react"
import {useDispatch} from "react-redux"
import Signup from "./Components/Signup/Signup";
import {Switch, Route} from "react-router-dom";
import Dashbord from "./Components/Dashbord/Dashbord"
import PrivateRoute from "./Components/router/PrivateRoute"
import './App.css';
import { current } from "./JS/actions/user/user"
import Loisirs from "./Components/pages/Loisirs";
import Vetement from "./Components/pages/Vetement";
import Meubles from "./Components/pages/Meubles";
import Multimédia from "./Components/pages/Multimédia";
import Véhicules from "./Components/pages/Véhicules";
import Electroménager from "./Components/pages/Electroménager";
import Profil from './Components/Dashbord/adminprofil/Profil';
import Add from './Components/AddPrdct/Add'
import Userprofil from './Components/Dashbord/userprofil/Userprofil'
import EditProduct from './Components/EditProduct/EditProduct'
import Cards from './Components/Cards/Cards'
import Navbar1 from './Components/Navbar1/Navbar1'
import Edituser from './Components/Dashbord/userprofil/Edituser'
import Panierr from "./Components/Panier/Panierr";
import Contact from "./Components/footer/Contact";
import Editadminprofil from './Components/Dashbord/adminprofil/Editadminprofil'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(current())
  })
  return (
    <div className="App">
      
      <header className="App-header">

   

      <Switch>
        <Route exact path= '/' component={Dashbord}/>
        <Route path= "/singnin" component={Signup}/>
        <Route path= "/Loisirs" component={Loisirs}/>
        <Route path= "/Vetement" component={Vetement}/>
        <Route path= "/Meubles" component={Meubles}/>
        <Route path= "/Multimédia" component={Multimédia}/>
        <Route path= "/Véhicules" component={Véhicules}/>
        <Route path= "/Electroménager" component={Electroménager}/>
        <PrivateRoute path='/admin' component={Profil}/>
        <Route path='/user' component={Userprofil}/>
        <Route path='/profi' component={Dashbord}/>
        <Route path='/add' component={Add}/>
        <Route path='/editproduct' component={EditProduct}/>
        <Route path='/cards' component={Cards}/>
        <Route path='/panier' component={Panierr}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/edituser' component={Edituser}/>
        <Route path='/editadmin' component={Editadminprofil}/>


        
        


      </Switch>

      </header>
    </div>
  );
}

export default App;
