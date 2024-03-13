import './App.css'

import {useState, useEffect} from 'react';

function TrafficLight({trafficColors, layout}){

const [currentColor, setCurrentColor] = useState('green');

useEffect(()=> {
const {duration, next} = trafficColors[currentColor]
const timer = setTimeout(()=> {setCurrentColor(next)}, duration);

return()=> {
    clearTimeout(timer)
}
}, [currentColor])

    return(
        <>
        <div className={layout === 'horizontal' ? 'horizontal' : 'vertical'}>
        {Object.keys(trafficColors).map((keyColor)=> (
            <div className="trafficCircles" style={{
                backgroundColor: keyColor === currentColor && trafficColors[keyColor].backgroundColor
            }}>
            </div> 
        ))}
        </div>  
        </>

    )
}

export default TrafficLight