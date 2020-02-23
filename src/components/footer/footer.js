import React from "react";
import './footer.css';
import License from '../../img/jpg/licensefooter.jpg'
import {NavLink} from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <div className='footerContent'>
                <div className="leftFoot">
                    <div className="labelFoot">
                        <img src={License} alt="A license"/>
                    </div>
                    <span>&#169;2020 MEDICAL RESEARCH LABORATORY LTD</span>
                </div>
                <div className="centerFoot">
                    <div className="licAddress">
                        <div className="cenAddress">
                            <p><span>Адресс:</span> <br/>г.Брест,ул. Северная, 12</p>
                        </div>
                        <div className="cenLicense">
                            <p><span>Лицензия:</span> <br/> № 1123988677878</p>
                        </div>
                    </div>
                </div>
                <div className="rightFoot">
                    <div className="telephoneFoot">
                        <span>Телефон:</span> <br/>
                        80162448833 (городской) <br/>
                    </div>
                    <div className="postFoot">
                        <span>E-mail:</span> <br/>
                        <NavLink to="/">laboratory@support.ltd</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;