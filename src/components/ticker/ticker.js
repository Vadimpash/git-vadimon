import React from "react";
import './ticker.css';

const Ticker = () => {
    return (
        <div className="ticker">
            <span>
            <marquee behavior="scroll" direction="left">Уважаемые пациенты! При обращении в медицинский центр вам
                необходимо предоставить документ удостоверящий личность.
            </marquee>
                </span>
        </div>
    );
}

export default Ticker;