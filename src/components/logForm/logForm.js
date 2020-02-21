import React from "react";
import './logForm.css';

const App = () => {
    return (
        <div className="form">
            <div className="artLog"><h1>Вход</h1></div>
            <form action="#">
                <span className="titLog">Логин</span>
                <div className="login">
                    <label htmlFor="login"> </label>
                    <input type="text" id="login"/>
                </div>
                <span className="titPass">Пароль</span>
                <div className="password">
                    <label htmlFor="password"> </label>
                    <input type="password" id="pass"/>
                </div>
                <button>Войти</button>
            </form>
        </div>
    );
}

export default App;