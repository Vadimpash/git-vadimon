import React from "react";
import './advantages.css';
import Adv from "../../../img/jpg/advantages.jpg"
import firArt from "../../../img/png/firArt.png"
import secArt from "../../../img/png/secArt.png"
import thiArt from "../../../img/png/thiArt.png"

const Advantages = () => {
    return (
        <div className="advantages">
            <div className="advImg">
                <img src={Adv} alt="A advantages"/>
            </div>
            <div className="advContent">
                <div className="advLogo">
                    <h4>MEDICAL RESEARCH LABORATORY LTD</h4>
                    <h1>Наши преимущества</h1>
                </div>
                <div className="advArticle">
                    <img src={firArt} alt="A first article"/>
                    <p>Медицинскую помощь, диагностические и консультативные услуги оказывают
                        высококвалифицированные, опытные сотрудники, специалисты высшей категории.</p>
                    <img src={secArt} alt="A second article"/>
                    <p>Благодаря профессионализму врачей, новейшему оборудованию, комплексному подходу и передовым
                        методикам эффективность лечения в находится на высоком уровне. </p>
                    <img src={thiArt} alt="A third article"/>
                    <p>Клиника полностью укомплектована самой современной аппаратурой, материалами для безопасной и
                        эффективной работы на всех этапах обследования и лечения. </p>
                </div>
            </div>
        </div>
    );
}

export default Advantages;