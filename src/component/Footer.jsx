import { Link } from "react-router-dom"


const Footer = ()=>{

    return(
        <>
            <div className="footer_container">
                <div className="footer_item footer_logo">
                    <h1 >Fit<span style={{color:"rgb(240, 209, 75)"}}>Zone</span></h1>
                    <p>"Unleash Your Power — Build Strength, Inside and Out."</p>
                </div>
                <div className="footer_item">
                    <h2>LINKS</h2>
                    <ul>
                        <a href="/"><li>Home</li></a>
                        <Link to='/exercise'><li>Exercise</li></Link>
                        <Link to='/fitness'><li>Fitness</li></Link>
                        <Link to='/contact'><li>Contact</li></Link>
                        <Link to='/about'><li>About</li></Link>
                    </ul>
                </div>
                <div className="footer_item">
                    <h2>CONTACT US</h2>
                    <ul>
                        <li>📞 +91 8802389087</li>
                        <li>📧 Shubhampandit75572@gmail.com</li>
                        <li>Made with ❤️<span>SHUBHAM PANDIT</span></li>
                    </ul>
                </div>
            </div>
        </>
    )
}


export default Footer