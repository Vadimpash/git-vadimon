import React from "react";
import './service.css';
import appSvg from '../../../img/svg/clipboard.svg'
import locSvg from '../../../img/svg/hospital.svg'
import injSvg from '../../../img/svg/injection.svg'
import {NavLink} from "react-router-dom";

const Service = () => {
    return (
        <div className="serviceMenu">
            <div className="appointment"><img src={appSvg} alt="A clipboard"/><p>Регистрация на приём к специалисту</p>
                <NavLink to="/">
                    <button>Перейти >>></button>
                </NavLink></div>
            <div className="location"><img src={locSvg} alt="A location"/><p>Местоположение нашей клиники</p><NavLink
                to="/">
                <button>Перейти >>></button>
            </NavLink></div>
            <div className="service"><img src={injSvg} alt="A injection"/><p>Предоставляемые услуги</p><NavLink to="/">
                <button>Перейти >>></button>
            </NavLink>

            </div>
        </div>
    );
}

export default Service;