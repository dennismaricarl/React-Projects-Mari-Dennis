import './App.css'

import {useState} from 'react';

function TrafficLight({trafficColors}){
const [currentColor, setCurrentColor] = useState('green');

    return(
        <div className="wrapper">
        {Object.keys(trafficColors).map((keyColor)=> (
            <div className="gray" style={{
                backgroundColor: keyColor === currentColor && trafficColors[keyColor].backgroundColor 
            }}></div>
        ))}
        </div>
    )
}

export default TrafficLight