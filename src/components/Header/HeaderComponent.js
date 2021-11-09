import { NavLink, Navigate } from 'react-router-dom';
import { PrivateOutlet } from '../../App';
import './HeaderComponent.css';

function HeaderComponent() {

  function handleOnClick() {
    window.sessionStorage.clear();
    <Navigate to="/login" />
  }

  return (
  <div className="sidenav">
    <NavLink className="content" to='/home'>
      Home
    </NavLink>
    <NavLink className="content" to='/aerodromes'>
      Aerodromes
    </NavLink>
    <NavLink className="content" to='/login'>
      Login
    </NavLink>
    <NavLink className="content" to='/cadastro'>
      Cadastro
    </NavLink>
    <NavLink className="content" to='/login' onClick={handleOnClick}>
      Logout
    </NavLink>
  </div>
  );
};

export default HeaderComponent;