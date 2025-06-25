import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "../component/Navbar"
import Footer from "../component/Footer"
import { Exercise } from "../component/Exercise"
import ExerciseDisplay from "../component/ExerciseDisplay"


const ExercisePage = ()=>{

    return (
        <>
            <Navbar/>
            <ExerciseDisplay />
            <Footer/>
        </>
    )
}


export default ExercisePage