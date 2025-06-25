
import { useNavigate } from "react-router-dom"


export const Exercise = ()=>{

    const navigate = useNavigate()

    const handle_click = (data)=>{
        navigate(`exercise/${data.name}`)
    }


    return (
            <div className="exercise_container">
                <h1>EXERCISE</h1>
                <div className="gym_list">
                
                <div className="gym_item chest" onClick={()=>handle_click({name:"CHEST"})}>
                    <img src="../src/Pictures/Exercise/Chest.jpg" alt="Chest" />
                    <h3>CHEST</h3>
                    <p>Build upper body power and muscle strength.</p>
                </div>

                <div className="gym_item triceps" onClick={()=>handle_click({name:"TRICEPS"})}>
                    <img src="../src/Pictures/Exercise/Triceps.jpg" alt="Triceps" />
                    <h3>TRICEPS</h3>
                    <p>Shape and strengthen your arms with focused tricep training.</p>
                </div>

                <div className="gym_item shoulder" onClick={()=>handle_click({name:"SHOULDER"})}>
                    <img src="../src/Pictures/Exercise/Shoulder.jpg" alt="Shoulder" />
                    <h3>SHOULDER</h3>
                    <p>Enhance your frame with powerful, sculpted shoulders.</p>
                </div>

                <div className="gym_item back" onClick={()=>handle_click({name:"BACK"})}>
                    <img src="../src/Pictures/Exercise/Back.jpg" alt="Back" />
                    <h3>BACK</h3>
                    <p>Improve posture and strength with intense back workouts.</p>
                </div>

                <div className="gym_item leg" onClick={()=>handle_click({name:"LEG"})}>
                    <img src="../src/Pictures/Exercise/Legs.jpg" alt="Legs" />
                    <h3>LEG</h3>
                    <p>Train your foundation—strong legs for total-body power.</p>
                </div>

                <div className="gym_item biceps" onClick={()=>handle_click({name:"BICEPS"})}>
                    <img src="../src/Pictures/Exercise/Biceps.jpg" alt="Biceps" />
                    <h3>BICEPS</h3>
                    <p>Build arm size and definition with focused bicep moves.</p>
                </div>

                </div>
            </div>
    );


}