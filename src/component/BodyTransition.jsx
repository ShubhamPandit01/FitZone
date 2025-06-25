import { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import {increment, decrement} from '../Data.js'

import image from '../Pictures/increment.jpg'


const BodyTransition = () => {

    const [display, setDisplay] = useState(true)
    const [weight, setWeight] = useState('')
    const [goal, setGoal] = useState('')
    const [plans, setPlans] = useState([]);

    const handleSubmit = (e)=>{
        e.preventDefault()

        let selectedPlan = goal == 'increment'? increment.find((plan) => plan.targetGain === `${weight}kg`) : decrement.find((plan) => plan.targetLoss === `${weight}kg`);

        setPlans(selectedPlan)
        setDisplay(false)
    }

  return (
    <>
      <Navbar />
      <div className="body_transition_container">
        {display ? (
          <form className="weight-form" onSubmit={handleSubmit}>
            <h2>Body Transition Goal</h2>

            <label forhtml="weightValue">Weight (kg):</label>
            <input
              type="number"
              id="weightValue"
              name="weightValue"
              min="1"
              max="10"
              placeholder="Enter weight in kg"
              required
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />

            <label forhtml="changeType">Select Goal:</label>
            <select
              id="changeType"
              name="changeType"
              required
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
            >
              <option value="">--Select--</option>
              <option value="increment">Increase Weight</option>
              <option value="decrement">Lose Weight</option>
            </select>

            <button type="submit">Submit</button>
          </form>
        ) : (
          <div className="diet_plan">
            <div className="body_image">
              <img src={image} alt="Image" />
            </div>
            <div className="diet">
                    <h3>Target: {weight}Kg Weight {goal} in <span style={{color: 'rgb(240, 209, 75)'}}>{plans.days} Days</span></h3>
                    <h4>Exercise:</h4>
                    <p>{plans.exercise[0]}</p>
                    <p>{plans.exercise[1]}</p>
                    <p>{plans.exercise[2]}</p>
                    <h4>Diet:</h4>
                    <p>{plans.diet[0]}</p>
                    <p>{plans.diet[1]}</p>
                    <p>{plans.diet[2]}</p>
                    <p>{plans.diet[3]}</p>
                    <p>{plans.diet[4]}</p>
                    <p>{plans.diet[5]}</p>
                    <p>{plans.diet[6]}</p>
                    <p>{plans.diet[7]}</p>
                    <p>NOTE: Please take a screenshot for future purpose.</p>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default BodyTransition