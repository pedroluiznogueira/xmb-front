import { NavLink, Navigate } from 'react-router-dom';
import './HeaderComponent.css';
import eventBus from '../Shared/EventBus';
import React,{Component} from 'react';

class HeaderComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
    };
  }

  handleOnClick() {
    window.sessionStorage.clear();
    <Navigate to="/login" />
  }

  componentDidMount() {
    eventBus.on("username", (data) =>
      this.setState({ username: data.username })
    );
  }

  componentWillUnmount() {
    eventBus.remove("username");
  }

  render() {
    return (
      <div className="sidenav">
        <NavLink className="content" to=''>
          {this.state.username}
        </NavLink>
        <NavLink className="content" to='/home'>
          Home
        </NavLink>
        <NavLink className="content" to='/map'>
          Map
        </NavLink>
        <NavLink className="content" to='/mapview'>
          Mapview
        </NavLink>
        {/* <NavLink className="content" to='/aerodromes'>
          Aerodrome
        </NavLink> */}
        <NavLink className="content" to='/login'>
          Login
        </NavLink>
        <NavLink className="content" to='/cadastro'>
          Cadastro
        </NavLink>
        <NavLink className="content" to='/login' onClick={this.handleOnClick}>
          Logout
        </NavLink>
      </div>
      );
  }
};

export default HeaderComponent;