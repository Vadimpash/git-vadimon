import React from 'react';
import './menu.css';
import Logo from '../../img/png/logo.png'
import {NavLink} from "react-router-dom";


const Menu = () => {
    return (
        <div className="menu">
            <img src={Logo} alt="A logo"/>
            <NavLink to="/home" activeClassName='active'>Главная</NavLink>
            <NavLink to="/timetable" activeClassName='active'>График приёма</NavLink>
            <NavLink to="/services">Платные услуги</NavLink>
            <NavLink to="/info">О клинике</NavLink>
        </div>
    );
}

export default Menu;