import { NavLink } from 'react-router-dom';

import classes from './HeaderComponent.module.css';

function HeaderComponent() {
  
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to='/aerodromes'>
              Aerodromes
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to='/login'>
              Login
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to='/cadastro'>
              Cadastro
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderComponent;