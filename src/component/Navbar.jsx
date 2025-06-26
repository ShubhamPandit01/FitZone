import { useState } from "react"
import { Link } from 'react-router-dom';


const Navbar = ()=>{

    const [itemActive, setItemActive] = useState('')

    return( 
        <>
            <nav className='main_container'>
                <div className="main_nav">
                    <div className="logo">
                        <h1 onClick={()=>setItemActive('')} ><Link to='/'>Fit<span style={{color:"rgb(240, 209, 75)"}}>Zone</span></Link></h1>
                    </div>
                    <div className="nav_items">
                        <h3 onClick={()=>setItemActive('')} ><Link to='/'>Home</Link></h3>
                        <h3 onClick={()=>setItemActive('exercise')} ><Link className={itemActive==="exercise"? 'active':''} to='/exercise'>Exercise</Link></h3>
                        <h3 onClick={()=>setItemActive('fitness')} ><Link className={itemActive==="fitness"? 'active':''} to='fitness'>Fitness</Link></h3>
                        <h3 className={itemActive==="contact"? 'active':''} onClick={()=>setItemActive('contact')} ><Link to='/contact'>Contact</Link></h3>
                        <h3 className={itemActive==="about"? 'active':''} onClick={()=>setItemActive('about')}> <Link to='/about'>About</Link></h3>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar