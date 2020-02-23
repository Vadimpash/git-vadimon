import React from "react";
import './header.css';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <span className="icon-inst"> </span>
                <span className="icon-vk"> </span>
                <span className="icon-tg"> </span>
            </div>
            <div className="mail">
                <span className="icon-mail"> </span>
                <NavLink to="/form">laboratory@support.ltd</NavLink>
            </div>
            <div className="time">
                <span className="icon-clock"> </span>
                <span>Время:</span>
                <span>20:47:02</span>
                <span>05 OCT 2019</span>
            </div>
            <div className="logReg">
                <span className="icon-prof"> </span>
                <NavLink to="/logForm"><span>Вход</span></NavLink> / <NavLink to="/regForm"><span>Регистрация</span></NavLink>
            </div>
        </div>
    );
}

export default Header;