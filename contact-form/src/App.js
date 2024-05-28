import './App.css';
import Form from './form.js';
import ThankYou from './thankyou.js';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Form />} />
        <Route path='/thankYou' element={<ThankYou />} />
      </Routes>
    </div>
  );
}


export default App;
