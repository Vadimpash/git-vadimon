import React from "react";
import "./home.css";
import Advantages from "./advantages/advantages";
import Banner from "./banner/banner";
import Slider from "./slider/slider";
import Service from "./service/service";
import News from "./news/news";

const Home = () => {
    return (
        <div className="home">
            <Banner/>
            <Slider/>
            <Service/>
            <Advantages/>
            <News/>
        </div>
    );
}

export default Home;