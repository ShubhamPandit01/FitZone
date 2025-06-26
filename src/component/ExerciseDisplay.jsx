import { useEffect, useState } from "react";
import { useParams} from "react-router-dom"
import {chest, shoulder, leg, back, triceps, biceps} from "../Data.js"


import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

import heroImg from "../Pictures/Hero2.jpg";


const exercise_display = ()=>{

    const {name} = useParams()
    const [display, setDisplay] = useState(true)
    const [exerciseId, setExerciseId] = useState(null)
    const [filterValue, setFilterValue] = useState([])


    const getDataByName = (name) => {
        switch (name.toUpperCase()) {
        case 'CHEST': return chest;
        case 'TRICEPS': return triceps;
        case 'SHOULDER': return shoulder;
        case 'BACK': return back;
        case 'LEG': return leg;
        case 'BICEPS': return biceps;
        default: return [];
        }
    };

    const exerciseData = getDataByName(name);

    useEffect(()=>{
        const result = exerciseData.filter((value)=> value.id == exerciseId)
        setFilterValue(result)
    },[exerciseId, display])
    
    return (
        <>
            <Navbar/>
            {
                display? (
                    <div className="exercise_component_container"> 
                        <h1>{name} WORKOUT</h1>
                        
                        <div className="exercise_card_box">
                            {
                                exerciseData.map((exercise)=>(
                                    <div key={exercise.id} className="exercise_card" onClick={()=>{setExerciseId(exercise.id), setDisplay(false)}}>
                                        <img src={heroImg} alt={exercise.name} />
                                        <h2>{exercise.name}</h2>
                                        <p>{exercise.description}</p>
                                    </div>
                                ))
                            }   
                        </div>
                    </div>
                ) : (
                    <>
                        {
                            filterValue.map((value)=>(
                                <div className="exercise_detail_card">
                                    <img src={heroImg} alt={value.name} />
                                    <div className="details">
                                        <h1>{value.name}</h1>
                                        <h3>{value.description}</h3>
                                        <p>{value.instructions[0]}</p>
                                        <p>{value.instructions[1]}</p>
                                        <p>{value.instructions[2]}</p>
                                        <p>{value.instructions[3]}</p>
                                        <p>{value.instructions[4]}</p>
                                        <p>{value.instructions[5]}</p>
                                        <p>{value.instructions[6]}</p>
                                        <p>{value.instructions[7]}</p>
                                        <p>{value.instructions[8]}</p>
                                        <p>{value.instructions[9]}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </>
                )
            }
            <Footer/>
        </>
    )
}

export default exercise_display