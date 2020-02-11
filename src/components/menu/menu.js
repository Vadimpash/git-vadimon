import React from 'react';
import './menu.css';
import Logo from '../../img/png/logo.png'

const Menu = () => {
    return (
        <div className="menu">
            <img src={Logo} alt="A logo"/>
            <a href="/home">Главная</a>
            <a href="/timetable">График приёма</a>
            <a href="/services">Платные услуги</a>
            <a href="/info">О клинике</a>
        </div>
    );
}

export default Menu;