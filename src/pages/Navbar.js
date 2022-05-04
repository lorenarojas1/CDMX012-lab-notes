/* eslint-disable linebreak-style */
/* eslint-disable react/button-has-type */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable linebreak-style */
// import { NavLink } from "react-router-dom";
import './navbar.css';
import openMenu from '../img/openMenu.png';
import logoutIcon from '../img/logoutIcon.svg';
// import searchIcon from "../img/searchIcon.svg"
// import {useNavigate } from "react-router-dom";
import { useAuth } from '../context/authContext';

export default function Navbar() {
  // const navigate = useNavigate();
  const { logout } = useAuth();
  const handleLogout = async () => {
    await logout();
  };

  return (
    <div className="nav">
      <ul>
        <li>
          <img className="icon-nav" src={openMenu} alt="menu-icon" />
        </li>
      </ul>
      <ul>
        <li>
          <button onClick={handleLogout}>
            <img className="icon-nav-logout" src={logoutIcon} alt="logout-icon" />

          </button>
        </li>
      </ul>
    </div>
  );
}
