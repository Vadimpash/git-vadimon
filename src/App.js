import React from "react";
import './App.css';
import './fonts/stylesheet.css'
import './fonts/icomoon/style.css'
import Header from "./components/header/header";
import Menu from "./components/menu/menu";
import Banner from './components/banner/banner'
import Slider from "./components/slider/slider";
import Service from "./components/service/service";
import Advantages from "./components/advantages/advantages";
import News from "./components/news/news";
import Cooperation from "./components/cooperation/cooperation";
import Footer from "./components/footer/footer";

const App = () => {
    return (
        <div className="wrapper">
            <Header/>
            <Menu/>
            <Banner/>
            <Slider/>
            <Service/>
            <Advantages/>
            <News/>
            <Cooperation/>
            <Footer/>
        </div>
    );
}

export default App;