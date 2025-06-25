

import { MdMessage } from "react-icons/md";
import { FaClockRotateLeft } from "react-icons/fa6";
import { TbListDetails } from "react-icons/tb";



const Hero = ()=>{



    return (
        <>
            <div className="hero_container">
                <div className="hero_text">
                    <ul>
                        <li>BUILD</li>
                        <li>YOUR</li>
                        <li>BODY</li>
                        <li><button>GET STARTED</button></li>
                    </ul>
                </div>
               <div className="hero_items">
                    <div className="item">
                        <div className="icon">
                            <p><MdMessage/></p>
                            <h2>FREE CONSULTATION</h2>
                        </div>
                        <p>Free constitutions & training programs expert.</p>
                    </div>
                    
                    <div className="item">
                        <div className="icon">
                            <p><TbListDetails/></p>
                            <h2> TRAINING PROGRAMS</h2>
                        </div>
                        <p>Expert gym training for your~ best body.</p>
                    </div>

                    <div className="item">
                        <div className="icon">
                            <p><FaClockRotateLeft/></p>
                            <h2> OPEN 7 DAYS A WEEK</h2>
                        </div>
                        <p>Join us on our open day, everyone’s welcome!</p>
                    </div>
               </div>
            </div>
        </>
    )
}


export default Hero