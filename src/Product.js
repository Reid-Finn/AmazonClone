import React from 'react';
import "./Product.css"

function Product() {
    return (
        <div className="product">
            <div className="product__info">
                <p>CORSAIR - K70 RGB MK.2 LOW PROFILE RAPIDFIRE</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>19.99</strong>
                </p>
                <div className="product__rating">
                    <p>stars</p>
                </div>
                
                <img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6298/6298657cv11d.jpg" alt=""></img>

                <button> Add to Basket </button>

            </div>
        </div>
    )
}

export default Product
