import React from 'react'
import "./Solution1.css"

const Solution1 = ({setSolution1}) => {
  return (
    <div className="view-container solution1-container">
      <main className="ad-card">
        <div className="card-column img-column">
       

<picture>
  <source media="(min-width:551px)" srcSet="./images/image-product-desktop.jpg"/>
  <img className="card-img" src="./images/image-product-mobile.jpg" alt="Card-Img"/>
</picture>
        </div>
        <div className="card-column">
          <div className="card-content">
            <h4 className="thin uppercase l-spacing slidein">Perfume</h4>
            <h1 className="my-2 fancy slidein">Gabrielle Essence Eau De Parfum</h1>
            <p className="l-height slidein">
            A floral, solar and voluptuous interpretation composed by Olivier Polge, 
  Perfumer-Creator for the House of CHANEL.
            </p>
            <div className="prices-row my-2">
              <h1 className="green fancy scale-price">$149.99</h1>
              <p className="faded line-thru bold fadeinprice">$169.99</p>
            </div>
            <button className="primary-btn">
              <img className="cart-img" src="./images/icon-cart.svg" alt="" />
              Add to cart
            </button>
          </div>
        </div>
      </main>
      <button onClick={()=>setSolution1((solution1)=>solution1=!solution1)} className="alt-btn absolute-btn">3d Solution</button>

    </div>
  )
}

export default Solution1