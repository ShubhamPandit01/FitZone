
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



// importing components
import HomePage from './pages/HomePage';
import ExercisePage from './pages/ExercisePage';
import Cardio from './component/Cardio';
import BodyTransition from './component/BodyTransition';
import BMICalculator from './component/BMICalculator';
import BuyProtine from './component/BuyProtine';
import About from './component/About';
import ExerciseDisplayPage from './pages/ExerciseDisplayPage';
import ExerciseDisplay from './component/ExerciseDisplay';
import FitnessPage from './pages/FitnessPage';
import ContactPage from './pages/ContactPage';
import Navbar from './component/Navbar';
import Footer from './component/Footer';

function App() {
  
  return(
    <>
      
      <Router>
        <Navbar/>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/exercise/:name" element={<ExerciseDisplayPage/>} />
            <Route path="/exercise" element={<ExercisePage/>} />
            <Route path="/exercise/exercise/:name" element={<ExerciseDisplay/>} />
            <Route path="/fitness" element={<FitnessPage/>} />
            <Route path="/cardio" element={<Cardio/>}/>
            <Route path="/bodyTransition" element={<BodyTransition/>}/>
            <Route path="/bmicalculator" element={<BMICalculator/>}/>
            <Route path="/buyprotine" element={<BuyProtine/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<ContactPage/>}/>
          </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
