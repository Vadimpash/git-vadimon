import React from "react";
import './App.css';
import './fonts/stylesheet.css';
import './fonts/icomoon/style.css';
import Header from "./components/header/header";
import Menu from "./components/menu/menu";
import Rewards from "./components/rewards/rewards";
import Ticker from "./components/ticker/ticker";
import Footer from "./components/footer/footer";
import Home from "./components/home/home.js";
import Timetable from "./components/timetable/timetable.js";
import Paid from "./components/paidservices/paid";
import Info from "./components/info/info";
import logForm from "./components/logForm/logForm";
import regForm from "./components/regForm/regForm";
import {BrowserRouter, Route} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header/>
                <Menu/>
                    <Route path='/home' component={Home}/>
                <div className="timetable">
                    <Route path='/timetable' component={Timetable}/>
                </div>
                <div className="paid">
                    <Route path='/services' component={Paid}/>
                </div>
                <div className="info">
                    <Route path='/info' component={Info}/>
                </div>
                <div className="logForm">
                    <Route path='/logForm' component={logForm}/>
                </div>
                <div className="regForm">
                    <Route path='/regForm' component={regForm}/>
                </div>
                <Rewards/>
                <Ticker/>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;