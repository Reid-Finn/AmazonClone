import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/ZDNhNDdkYjQt/ZDNhNDdkYjQt-ZTg3YmRhNDMt-w3000._CB656263428_.jpg" alt="" />
            </div>

            <div className="home__row">
                <Product />
                {/* Product */}
            </div>
            <div className="home__row">
                {/* Product */}
                {/* Product */}
                {/* Product */}
            </div>
            <div className="home__row">
                {/* Product */}
            </div>
        </div>
    )
}

export default Home