import React from "react";
import './rewards.css';
import firRewards from '../../img/png/firReward.png'
import secRewards from '../../img/png/secReward.png'
import thiRewards from '../../img/png/thiReward.png'
import fouRewards from '../../img/png/fouReward.png'
import fivRewards from '../../img/png/fivReward.png'

const Rewards = () => {
    return (
        <div className="rewards">
            <div className="itemReward">
                <p><img src={firRewards} alt="A rewards"/></p>
                <p><img src={secRewards} alt="A rewards"/></p>
                <p><img src={thiRewards} alt="A rewards"/></p>
                <p><img src={fouRewards} alt="A rewards"/></p>
                <p><img src={fivRewards} alt="A rewards"/></p>
            </div>
        </div>
    );
}

export default Rewards;