import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Hero from '../component/Hero'
import {Exercise} from '../component/Exercise'
import Fitness from '../component/Fitness'


const HomePage = ()=>{

    return(

        <>  
            <Navbar/>
            <Hero/>
            <Exercise/>
            <Fitness/>
            <Footer/>
        </>
    )
}


export default HomePage