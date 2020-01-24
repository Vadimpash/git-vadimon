import React from 'react';
import './menu.css';
import Logo from '../../img/png/logo.png'

const Menu = () => {
    return (
        <div className="menu">
            <img src={Logo} alt="A logo"/>
            <a href="/">Главная</a>
            <a href="/">График приёма</a>
            <a href="/">Платные услуги</a>
            <a href="/">Информация</a>
        </div>
    );
}

export default Menu;