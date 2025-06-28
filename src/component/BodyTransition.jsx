import { useState } from 'react'
import {increment, decrement} from '../Data.js'


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
              <img src= "https://i.pinimg.com/736x/84/a0/25/84a025ea2c201d9a58e9011e59bae333.jpg" alt="Image" />
            </div>
            <div className="diet">
                    <h3>Target: {weight}Kg Weight {goal} in <span style={{color: 'rgb(240, 209, 75)'}}>{plans.days} Days</span></h3>
                    <h4>Exercise:</h4>
                    {
                      plans.exercise.map((value,index)=>(<p key={index}>{value}</p>))
                    }
                    <h4>Diet:</h4>
                    {
                      plans.diet.map((value,index)=>(<p key={index}>{value}</p>))
                    }
                    <p>NOTE: Please take a screenshot for future purpose.</p>
            </div>
          </div>
        )}
      </div>

    </>
  );
}

export default BodyTransition