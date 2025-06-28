import { Link } from "react-router-dom"


const Footer = ()=>{

    return(
        <>
            <div className="footer_container">
                <div className="footer_item footer_logo">
                    <h1 >Fit<span style={{color:"rgb(240, 209, 75)"}}>Zone</span></h1>
                </div>
                <div className="footer_item">
                    <ul>
                        <a href="/"><li>Home</li></a>
                        <Link to='/exercise'><li>Exercise</li></Link>
                        <Link to='/fitness'><li>Fitness</li></Link>
                        <Link to='/contact'><li>Contact</li></Link>
                        <Link to='/about'><li>About</li></Link>
                    </ul>
                </div>
            </div>
        </>
    )
}


export default Footer