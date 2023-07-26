import {Component} from 'react';
import './Nav.scss';
import { NavLink } from 'react-router-dom';

class Nav extends Component {


    render() {
        return (
            <div className="topnav">
                <NavLink activeclassname="active" to="/">Home</NavLink>
                <NavLink activeclassname="active" to="/todo">Todos</NavLink>
                <NavLink activeclassname="active" to="/about">About</NavLink>
                <NavLink activeclassname="active" to="/user">Users</NavLink>
            </div>
        );
    }
}

export default Nav;