import React from "react";
import './regForm.css';

const App = () => {
    return (
        <div className="form">
            <div className="artReg">
                <div className="posReg"><h1>Регистрация</h1></div>
            </div>
            <div className="wrapperReg">
                <form action="#">
                    <div className="formCont"><span className="titLog">Логин</span>
                        <div className="Registration">
                            <label htmlFor="Registration"> </label>
                            <input type="text" id="reg" placeholder="Введите ваш логин"/>
                        </div>
                        <span className="titPass">Пароль</span>
                        <div className="password">
                            <label htmlFor="password"> </label>
                            <input type="password" id="pass" placeholder="Введите ваш пароль"/>
                        </div>
                        <button>Зарегистрироваться</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default App;