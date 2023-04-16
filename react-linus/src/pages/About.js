import React from "react";
import Flower from '../components/FlowerComponent'
import Hej from '../components/HejComponent'
import Stock from '../components/StockComponent'


function About () {
    return (
        <div>
            <Flower rose='Ros.' rose2=' En till ros'></Flower>
            <Hej></Hej>
            <Stock></Stock>
        </div>
    )
}

export default About
