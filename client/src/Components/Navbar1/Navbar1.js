import React from 'react';
import { Link } from 'react-router-dom';
import {logout} from "../../JS/actions/user/user"
import { useHistory } from 'react-router-dom'
import { useDispatch  , useSelector} from 'react-redux'


import { FcPaid } from "react-icons/fc";

import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  const dispatch = useDispatch()

    const user = useSelector(state => state.userReducer.user)
    const history=useHistory();

  return (
    <div className='navtot' style={{display:'flex'}}>
      <Link to='/' className='navbar-logo' >
        <h1 style={{marginRight:'90%'}}>FORSA</h1>
            {/* <img className='imgnav' src='./images/forsa.jpg'  style={{width:"15", height:"15"}} /> */}
            {/* <i class='fab fa-typo3' /> */}
      </Link>  

          {user && user.isAdmin ? <NavLink className="sc-eCApnc iIgkBU" to='/admin' activeStyle>
            ProfilAdmin
          </NavLink>: null}
            
            {/* <li className='nav-item'> */}
            {  user && !user.isAdmin?        <NavLink to='/user' activeStyle>
            ProfilUser
          </NavLink>:null}

          <button style={{ marginLeft:'700px' ,background:'#6a6f8c'}} onClick={()=>{
            dispatch(logout());
            history.push("/");
            }} >Déconnexion</button>
<Link to="/singnin" style={{ marginLeft:'20px'}}>Connexion</Link>

<Link to='/panier' ><FcPaid  style={{width:"40px",height:"40px",marginLeft:'90px'}} /></Link> 


{/* <NavBtn  className="sc-eCApnc iIgkBU">
        </NavBtn> */}

      {/* <div className="navbar"> */}
        {/* <div className='navbar-container'> */}
        
          
           
           
         
           

                  
          
           
         
          </div>
      
      
    
  );
};

export default Navbar;