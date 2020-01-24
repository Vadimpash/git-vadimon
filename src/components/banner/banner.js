import React from "react";
import './banner.css';
import Banner from '../../img/jpg/banner.jpg'

const Header = () => {
    return (
        <div className="banner">
            <img src={Banner} alt="A banner"/>
            <div className="banContent">
                <span>Здоровье бесценно. Доверяйте лучшим.</span>
                <span>Медицинский центр MRL</span>
                <div className="button">
                    <button>Зарегистрироваться сейчас</button>
                </div>
            </div>
        </div>
    );
}

export default Header;