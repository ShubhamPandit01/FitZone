
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



// importing components
import HomePage from './pages/HomePage';
import ExercisePage from './pages/ExercisePage';
import Cardio from './component/Cardio';
import BodyTransition from './component/BodyTransition';
import BMICalculator from './component/BMICalculator';
import BuyProtine from './component/BuyProtine';



function App() {
  
  return(
    <>
      <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/exercise/:name" element={<ExercisePage/>} />
            <Route path='/cardio' element={<Cardio/>}/>
            <Route path='/bodyTransition' element={<BodyTransition/>}/>
            <Route path='/bmicalculator' element={<BMICalculator/>}/>
            <Route path='/buyprotine' element={<BuyProtine/>}/>
          </Routes>
      </Router>
    </>
  )
}

export default App
