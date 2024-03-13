import TrafficLight from './TrafficLight';
import './App.css';

function App() {

  const trafficColors = {
    red: { 
      backgroundColor: "red",
      duration: 4000,
      next: "green"
    },
    yellow: {
      backgroundColor:"yellow",
      duration: 500,
      next:"red"
    },
    green: {
      backgroundColor:"green",
      duration: 3000,
      next:"yellow"
    }
  }
  return (
    <>
    <div className="wrapper">
      <TrafficLight trafficColors={trafficColors}/>
      <TrafficLight trafficColors={trafficColors}/>
      <TrafficLight trafficColors={trafficColors}/>
      <TrafficLight trafficColors={trafficColors}/>
      <TrafficLight trafficColors={trafficColors} layout="horizontal"/>
      <TrafficLight trafficColors={trafficColors} layout="horizontal"/>
      <TrafficLight trafficColors={trafficColors} layout="horizontal"/>
    </div>
    </>
  );
}

export default App;
