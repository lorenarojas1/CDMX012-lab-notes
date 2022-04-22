// import { NavLink } from "react-router-dom";
import "./navbar.css";
import openMenu from "../img/openMenu.png"
import logoutIcon from "../img/logoutIcon.svg"
import searchIcon from "../img/searchIcon.svg"
import {useNavigate } from "react-router-dom";
import {
    signOut,
} from "firebase/auth";
import { auth } from "../firebase-config";
export default function Navbar() {

    const navigate = useNavigate();

    const handleClick = async () => {
        try{
          await signOut(auth);
        navigate('/');
    }
    catch(error){
        console.log(error)
    }
}
    return (
        <div class="nav">
            <ul>
                <li>
                <img class="icon-nav" src={openMenu} alt="menu-icon"/>
                </li>
            </ul>
            <ul>
                <li>
                <img class="icon-nav" src={searchIcon} alt="search-icon"/>
                </li>
                <li>
                <button on onClick={handleClick}>
                <img class="icon-nav" src={logoutIcon} alt="logout-icon"/></button>
                </li>
            </ul>
        </div>
    )
}