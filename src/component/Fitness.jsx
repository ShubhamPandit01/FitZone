import { Link } from "react-router-dom"


const Fitness = ()=>{
    

    return (

        <div className="main">
            <h1>FITNESS</h1>    
            <div className="fitness_container">
                <Link to={"/cardio"} className="cardio card" style={{textDecoration: 'none', cursor: 'pointer'}}>
                    <h2>CARDIO</h2>
                    <p>Exercises to boost heart health and burn fat.</p>
                </Link>
                <Link to={"/bodyTransition"} className="body_transition card" style={{textDecoration: 'none', cursor: 'pointer'}}>
                    <h2>BODY TRANSITION</h2>
                    <p>Weight increment or decrement over time.</p>
                </Link>
                <Link to={"/buyprotine"} className="protine_calculator card" style={{textDecoration: 'none', cursor: 'pointer'}}>
                    <h2> BUY PROTINE</h2>
                    <p>Buy best protine powder from Amazon.</p>
                </Link>
                <Link to= {"/bmicalculator"} className="bmi_calculator card" style={{textDecoration: 'none', cursor: 'pointer'}}>
                    <h2>BMI CALCULATOR</h2>
                    <p>Check if your weight is healthy based on your height.</p>
                </Link>

            </div>
        </div>
    )
}


export default Fitness