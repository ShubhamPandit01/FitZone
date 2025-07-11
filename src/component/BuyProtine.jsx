import {proteinPowders} from "../Data.js"


const BuyProtine = () => {
  return (
    <>
        <div className="protine_container">
            
                {
                    proteinPowders.map((value)=>(
                        <div className="protine_card">
                            <div className="protine_image">
                                <img src={value.imageUrl} alt={value.name} />
                            </div>
                            <div className="protine_detail">
                                <h2>{value.brand}</h2>
                                <h3>{value.name}</h3>
                                <p>{value.type}</p>
                                <p>Flavour: {value.flavorExample}</p>
                                <p><span>PerUnit:{value.proteinPerServing}</span> <span>Serving: {value.servings}</span></p>
                                <button ><a href={value.amazonLink} target="blank">Buy Now</a></button>
                            </div>
                        </div>
                    ))
                }
        </div>
    </>
  )
}

export default BuyProtine