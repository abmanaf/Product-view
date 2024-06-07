import { useState } from 'react'
import laptopView from '/images/image-product-desktop.jpg'
import mobileView from '/images/image-product-mobile.jpg'
import './App.css'

function App() {

  return (
    <>
    <div className="container">
      <div className='image'>
          <img src={laptopView} className="desktop-image" alt="product-desktop" />
          <img src={mobileView} className="mobile-image" alt="product-mobile" />
      </div>
      <main>
        <span className="product-name">Perfume</span>
        <h1>Gabrielle Essence Eau De Parfum</h1>
        <p>
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <div className="prices">
          <span className="sale-price">$149.99</span
          ><span className="list-price">$169.99</span>
        </div>
        <button>
          <img className="cart-icon" src="images/icon-cart.svg" alt="" />Add to Cart
        </button>
        </main>
      </div>
    </>
  )
}

export default App
