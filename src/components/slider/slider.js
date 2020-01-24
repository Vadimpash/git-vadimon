import React from "react";
import './slider.css';

const Slider = () => {
    return (
        <div className="slider">
            <ul id="slides">
                <li className="slide">1</li>
                <li className="slide">2</li>
                <li className="slide">3</li>
                <li className="slide">4</li>
                <li className="slide">5</li>
                <li className="slide">6</li>
            </ul>
        </div>
    );
}

export default Slider;