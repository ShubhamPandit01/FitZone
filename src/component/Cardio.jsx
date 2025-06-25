
import {cardio} from '../Data.js'
import Navbar from '../component/Navbar.jsx'
import Footer from '../component/Footer.jsx'
import heroImg from "../Pictures/Hero2.jpg";



const Cardio = () => {

    return (
        <>  
        <Navbar/>
        <div className='cardio_container'>
            {   
                cardio.map((value)=>(
                        <div key={value.id} className="cardio_card" style={{flexDirection: value.id%2 != 0? 'row':'row-reverse'}}>
                            <img src={heroImg} alt= {value.title}/>
                            <div className="cardio_details">
                                <h2>{value.title}</h2>
                                <h4>{value.description}</h4>
                                <p>{value.instruction[0]}</p>
                                <p>{value.instruction[1]}</p>
                                <p>{value.instruction[2]}</p>
                                <p>{value.instruction[3]}</p>
                                <p>{value.instruction[4]}</p>
                            </div>
                        </div>
                ))
            }
        </div>
        <Footer/>
        </>
    )
}

export default Cardio