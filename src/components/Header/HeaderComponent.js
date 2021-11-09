import { NavLink } from 'react-router-dom';
import './HeaderComponent.css';

function HeaderComponent() {

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
        </ul>
      </nav>
    </header>
  );
};

export default HeaderComponent;