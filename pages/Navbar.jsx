import './navbar.css';
import openMenu from '../img/openMenu.png';
import logoutIcon from '../img/logoutIcon.svg';
import { useAuth } from '../context/authContext';

export default function Navbar() {
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
          <button type="button" onClick={handleLogout}>
            <img className="icon-nav-logout" src={logoutIcon} alt="logout-icon" />

          </button>
        </li>
      </ul>
    </div>
  );
}
