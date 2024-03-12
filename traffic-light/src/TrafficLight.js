import './App.css'

import {useState, useEffect} from 'react';

function TrafficLight({trafficColors}){

const [currentColor, setCurrentColor] = useState('green');

useEffect(()=> {
const {duration, next} = trafficColors
    //logic here 
    // setCurrentColor(next)
    //use setTimeOut
const timer = setTimeout(()=> {setCurrentColor(next)}, duration);

return()=> {
    clearTimeout(timer)
}
}, [currentColor])

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