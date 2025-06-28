import { Link } from "react-router-dom"


const Hamburger = ()=>{


    return (

        <>
            <div className="hamburger_container">
                <div className="hamburger_item">
                    <Link to='/'>Home</Link>
                    <Link to='/exercise'>Exercise</Link>
                    <Link to='/fitness'>Fitness</Link>
                    <Link to='/contact'>Contact</Link>
                    <Link to='/about'>About</Link>
                </div>
            </div> 
        </>
    )
}

export default Hamburger