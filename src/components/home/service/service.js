import React from "react";
import './service.css';
import appSvg from '../../../img/svg/clipboard.svg'
import locSvg from '../../../img/svg/hospital.svg'
import injSvg from '../../../img/svg/injection.svg'

const Service = () => {
    return (
        <div className="serviceMenu">
            <div className="appointment"><img src={appSvg} alt="A clipboard"/><p>Регистрация на приём к специалисту</p>
                <a href="/">
                    <button>Перейти >>></button>
                </a></div>
            <div className="location"><img src={locSvg} alt="A location"/><p>Местоположение нашей клиники</p><a
                href="/">
                <button>Перейти >>></button>
            </a></div>
            <div className="service"><img src={injSvg} alt="A injection"/><p>Предоставляемые услуги</p><a href="/">
                <button>Перейти >>></button>
            </a>

            </div>
        </div>
    );
}

export default Service;