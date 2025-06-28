import { Link } from "react-router-dom"


const Hamburger = (props)=>{


    return (

        <>
            <div className="hamburger_container">
                <div className="hamburger_item">
                    <Link to='/' onClick={()=>props.setHamburger(flase)}>Home</Link>
                    <Link to='/exercise' onClick={()=>props.setHamburger(flase)}>Exercise</Link>
                    <Link to='/fitness' onClick={()=>props.setHamburger(flase)}>Fitness</Link>
                    <Link to='/contact' onClick={()=>props.setHamburger(flase)}>Contact</Link>
                    <Link to='/about' onClick={()=>props.setHamburger(flase)}>About</Link>
                </div>
            </div> 
        </>
    )
}

export default Hamburger