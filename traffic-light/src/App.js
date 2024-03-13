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
    <h1>Collection of traffic lights</h1>
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
