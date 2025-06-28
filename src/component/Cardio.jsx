
import {cardio} from '../Data.js'



const Cardio = () => {

    return (
        <>  
        <div className='cardio_container'>
            <h1>Cardio</h1>
            {   
                cardio.map((value)=>(
                        <div key={value.id} className="cardio_card" style={{flexDirection: value.id%2 != 0? 'row':'row-reverse'}}>
                            <img src={value.image} alt= {value.title}/>
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
        </>
    )
}

export default Cardio