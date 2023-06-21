import React from 'react';
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import './Navbar.css'
import DarkMode from '../DarkMode';
import './Navbar.css'



function Navbar (props)  {
  const user= useSelector((state)=>state.user
    )
    const dispatch= useDispatch()

  return (
    <header>
        <h1>
            <NavLink  to="/">
            EZ Shopping
          </NavLink>
        </h1>  
    <nav>      
      <ul>
        <li>
          
             <NavLink  to="/profil">
                👺 {user.firstname} {user.lastname}
             </NavLink>
            
        </li>
        <li>
         <NavLink to="/panier">
            🛒 Items
         </NavLink>
          
        </li>
        <li>
            <DarkMode/>
        </li>
      </ul>
    </nav>
    </header>
  );
};

export default Navbar;