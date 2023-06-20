
import { NavLink } from "react-router-dom";
import DarkMode from "../DarkMode";

function Navbar (props)  {
  const checkIsactive = ({ isActive }) => {
    return {
      display: "block",
      margin: "1rem 0",
      color: isActive ? "orange" : "",
    };
  };

  return (
    <nav>
        <h1><NavLink style={checkIsactive} to="/">
            EZ Shopping
          </NavLink></h1>
      <ul>
        <li>
          
             <NavLink style={checkIsactive} to="/profil">
                👺 name lastname
             </NavLink>
            
        </li>
        <li>
         <NavLink style={checkIsactive} to="/profil">
            🛒 valueItem Item
         </NavLink>
          
        </li>
        <li>
            <DarkMode/>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;