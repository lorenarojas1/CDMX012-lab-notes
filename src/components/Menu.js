import { NavLink } from "react-router-dom";
import "./navbar.css";
import openMenu from "../img/openMenu.png"

export default function Navbar() {
    return (
        <div class="nav">
            <ul>
                <li>
                <img src={openMenu}/>

                </li>
                <li>
                    <NavLink className={({ isActive }) =>(isActive ? "active" : "")}
                        to='/login'>Login</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) =>(isActive ? "active" : "")}
                        to='/signup'>Sing up</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) =>(isActive ? "active" : "")}
                        to='/users'>Users</NavLink>
                </li>
            </ul>
        </div>
    )
}