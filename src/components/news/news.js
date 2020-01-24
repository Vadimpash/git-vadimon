import React from "react";
import './news.css';
import Calendar from '../../img/svg/calendar.svg';
import First from '../../img/png/blood.png'
import Second from '../../img/png/experts.png'
import Third from '../../img/png/services.png'
import Fourth from '../../img/png/1000years.png'

const News = () => {
    return (
        <div className="news">
            <div className="firItemNews">
                <div className="firImage">
                    <img src={First} alt="A first post"/>
                </div>
                <div className="firContent">
                    <div className="firTitle"><h2>СКИДКА 10 % на анализы крови</h2></div>
                    <div className="firDate"><span><img src={Calendar} alt="First date"/>15 ФЕВРАЛЯ 2019</span></div>
                    <div className="firText"><p>С 19 февраля по 18 апреля 2019 года в нашем МЦ действует СКИДКА 10 %
                        на анализы крови

                        Скидка не распространяется на ОАК </p></div>
                </div>
            </div>
            <div className="secItemNews">
                <div className="secImage">
                    <img src={Second} alt="A second post"/>
                </div>
                <div className="secContent">
                    <div className="secTitle"><h2>Новые специалисты в медицинском центре</h2></div>
                    <div className="secDate"><span><img src={Calendar} alt="Second date"/>15 ИЮЛЯ 2019</span></div>
                    <div className="secText"><p>Уважаемые пациенты!!!
                        Рады сообщить Вам о наших новых специалистах:
                        врач-оториноларинголог первой квалификационной категории
                        врач-стоматолог-терапевт первой квалификационной категории

                    </p></div>
                </div>
            </div>
            <div className="thiItemNews">
                <div className="thiImage">
                    <img src={Third} alt="A third post"/>
                </div>
                <div className="thiContent">
                    <div className="thiTitle"><h2>Наш медицинский центр предлагает новые виды услуг:</h2></div>
                    <div className="thiDate"><span><img src={Calendar} alt="Third date"/> 15 ФЕВРАЛЯ 2019</span></div>
                    <div className="thiText"><p>
                        ЛАБОРАТОРНАЯ ДИАГНОСТИКА
                        ПСИХОТЕРАПИЯ
                        СТОМАТОЛОГИЯ ХИРУРГИЧЕСКАЯ
                        СТОМАТОЛОГИЯ ОРТОПЕДИЧЕСКАЯ</p></div>
                </div>
            </div>
            <div className="fouItemNews">
                <div className="fouImage">
                    <img src={Fourth} alt="A fourth post"/>
                </div>
                <div className="fouContent">
                    <div className="fouTitle"><h2>Поздравляем вас с днём города!</h2></div>
                    <div className="fouDate"><span><img src={Calendar} alt="Fourth date"/>25 АВГУСТА 2019</span></div>
                    <div className="fouText"><p>Уважаемые жители и гости города Бреста!
                        Наш медицинский центр поздравляет вас с 1000-летием нашего удивительного, яркого и солнечного
                        города!
                        Хотим пожелать, чтобы все мы были дружны и едины, а наши старания, устремления и надежды
                        помогали
                        Бресту развиваться и процветать. Будьте счастливы, здоровы, успешны в своем деле!</p></div>
                </div>
            </div>
        </div>
    );
}

export default News;