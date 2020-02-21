import React from "react";
import './regForm.css';

const App = () => {
    return (
        <div className="form">
            <div className="artReg"><h1>Регистрация</h1></div>
            <form action="#">
                <span className="titLog">Логин</span>
                <div className="Registration">
                    <label htmlFor="Registration"> </label>
                    <input type="text" id="reg"/>
                </div>
                <span className="titPass">Пароль</span>
                <div className="password">
                    <label htmlFor="password"> </label>
                    <input type="password" id="pass"/>
                </div>
                <button>Зарегистрироваться</button>
            </form>
        </div>
    );
}

export default App;