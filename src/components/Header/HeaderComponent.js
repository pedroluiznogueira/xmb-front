import { NavLink, Navigate } from 'react-router-dom';
import { PrivateOutlet } from '../../App';
import './HeaderComponent.css';

function HeaderComponent() {

  function handleOnClick() {
    window.sessionStorage.clear();
    <Navigate to="/login" />
  }

  return (

    <header className="header">
      <div className="home">
        <NavLink className="content" to='/home'>
          Home
        </NavLink>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink className="content" to='/aerodromes'>
              Aerodromes
            </NavLink>
          </li>
          <li>
            <NavLink className="content" to='/login'>
              Login
            </NavLink>
          </li>
          <li>
            <NavLink className="content" to='/cadastro'>
              Cadastro
            </NavLink>
          </li>
          <li>
            <NavLink className="content" to='/login' onClick={handleOnClick}>
              Logout
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderComponent;