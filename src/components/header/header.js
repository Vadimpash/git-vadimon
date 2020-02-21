import React from "react";
import './header.css';

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
                <a href="/form">laboratory@support.ltd</a>
            </div>
            <div className="time">
                <span className="icon-clock"> </span>
                <span>Время:</span>
                <span>20:47:02</span>
                <span>05 OCT 2019</span>
            </div>
            <div className="logReg">
                <span className="icon-prof"> </span>
                <a href="/logForm"><span>Вход</span></a> / <a href="/regForm"><span>Регистрация</span></a>
            </div>
        </div>
    );
}

export default Header;