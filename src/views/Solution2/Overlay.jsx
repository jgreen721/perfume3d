import React from 'react'


const Overlay = ({setSolution1}) => {
  return (
    <div className="overlay">
        <div className="perfume-card">
            <h1 className="fancy my-2 green"> Gabrielle Essence Eau De Parfum</h1>
            <h5>  A floral, solar and voluptuous interpretation composed by Olivier Polge, 
  Perfumer-Creator for the House of CHANEL.</h5>
  <div className="prices-row my-2">
      <h2 className="fancy green">  $149.99 </h2>
   <h2 className="non-sale-price"> $169.99</h2>
  </div>
  <button className="btn primary-btn">
      <img className="cart-img" src="./images/icon-cart.svg" alt="" />
      Add to Cart
  </button>
        </div>
        <button onClick={()=>setSolution1((solution1)=>solution1=!solution1)} className="alt-btn absolute-btn">Normal Solution</button>

    </div>
  )
}

export default Overlay