import React from 'react';
import { NavLink } from "react-router-dom";
import './Navbar.css'
import DarkMode from '../DarkMode';


function Navbar (props)  {
  const checkIsactive = ({ isActive }) => {
    return {
      display: "block",
      margin: "1rem 0",
      color: isActive ? "orange" : "",
    };
  };

  return (
    <header>
        <h1><NavLink style={checkIsactive} to="/">
            EZ Shopping
          </NavLink></h1>  
    <nav>      
      <ul>
        <li>
          
             <NavLink style={checkIsactive} to="/profil">
                👺 name lastname
             </NavLink>
            
        </li>
        <li>
         <NavLink style={checkIsactive} to="/panier">
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