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
    <div>
      <TrafficLight trafficColors={trafficColors}/>
    </div>
  );
}

export default App;
