import React from "react";
import './banner.css';
import Banner from '../../../img/jpg/banner.jpg'
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className="banner">
            <img src={Banner} alt="A banner"/>
            <div className="banContent">
                <span>Здоровье бесценно. Доверяйте лучшим.</span>
                <span>Медицинский центр MRL</span>
                <div className="button">
                    <NavLink to="/regForm"><button>Зарегистрироваться сейчас</button></NavLink>
                </div>
            </div>
        </div>
    );
}

export default Header;