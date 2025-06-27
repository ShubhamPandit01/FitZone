
import { useNavigate } from "react-router-dom"


export const Exercise = ()=>{

    const navigate = useNavigate()

    const handle_click = (data)=>{
        navigate(`exercise/${data.name}`)
    }


    return (
            <div className="exercise_container" id="exercise">
                <h1>EXERCISE</h1>
                <div className="gym_list">
                
                <div className="gym_item chest" onClick={()=>handle_click({name:"CHEST"})}>
                    <img src="https://i.pinimg.com/736x/5b/01/7f/5b017f6f88be7f240863f291a69c6ecd.jpg" alt="Chest" />
                    <h3>CHEST</h3>
                    <p>Build upper body power and muscle strength.</p>
                </div>

                <div className="gym_item triceps" onClick={()=>handle_click({name:"TRICEPS"})}>
                    <img src="https://i.pinimg.com/736x/6d/35/c4/6d35c40c390c32de41d4f8a983e11668.jpg" alt="Triceps" />
                    <h3>TRICEPS</h3>
                    <p>Shape and strengthen your arms with focused tricep training.</p>
                </div>

                <div className="gym_item shoulder" onClick={()=>handle_click({name:"SHOULDER"})}>
                    <img src="https://i.pinimg.com/736x/8e/33/cf/8e33cf8ba3ddbf5c48e30d92b3e82ed4.jpg" alt="Shoulder" />
                    <h3>SHOULDER</h3>
                    <p>Enhance your frame with powerful, sculpted shoulders.</p>
                </div>

                <div className="gym_item back" onClick={()=>handle_click({name:"BACK"})}>
                    <img src="https://i.pinimg.com/736x/8f/f4/b7/8ff4b7feb05eeed5fb143cda1fd69895.jpg" alt="Back" />
                    <h3>BACK</h3>
                    <p>Improve posture and strength with intense back workouts.</p>
                </div>

                <div className="gym_item leg" onClick={()=>handle_click({name:"LEG"})}>
                    <img src="https://i.pinimg.com/736x/11/9f/a3/119fa3f1559c59db47c96b17fc275ad5.jpg   " alt="Legs"/>
                    <h3>LEG</h3>
                    <p>Train your foundation—strong legs for total-body power.</p>
                </div>

                <div className="gym_item biceps" onClick={()=>handle_click({name:"BICEPS"})}>
                    <img src="https://i.pinimg.com/736x/ae/e2/62/aee262b672767f31099734ebd24d22e5.jpg" alt="Biceps" />
                    <h3>BICEPS</h3>
                    <p>Build arm size and definition with focused bicep moves.</p>
                </div>

                </div>
            </div>
    );


}