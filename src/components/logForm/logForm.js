import React from "react";
import './logForm.css';

const App = () => {
    return (
        <div className="form">
            <div className="artLog">
                <div className="posLog"><h1>Вход</h1></div>
            </div>
            <div className="wrapperLog">
                <form action="#">
                    <div className="formCont"><span className="titLog">Логин</span>
                        <div className="login">
                            <label htmlFor="login"> </label>
                            <input type="text" id="login" placeholder="Введите ваш логин"/>
                        </div>
                        <span className="titPass">Пароль</span>
                        <div className="password">
                            <label htmlFor="password"> </label>
                            <input type="password" id="pass" placeholder="Введите ваш пароль"/>
                        </div>
                        <button>Войти</button>
                    </div>
                </form>
            </div>

        </div>
    );
}

export default App;