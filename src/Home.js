import React from 'react'
import './Home.css'
import Product from './Product';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/digital/adrive/photos/gateway/APH_feb-21_hero_1x._CB661372629_.jpg" alt="" />
        <div className="home__row">
          <Product 
          id='123432345' 
          title='CORSAIR - K70 RGB MK.2 LOW PROFILE RAPIDFIRE'
          price={149.99}
          image='https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6298/6298657_sd.jpg;maxHeight=640;maxWidth=550'
          rating={5}
          />
          <Product 
          id='9082432'
          title='Logitech - MX Keys Advanced Wireless Illuminated Keyboard - Black'
          price={99.99}
          image='https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6366/6366560_sd.jpg;maxHeight=640;maxWidth=550'
          rating={4}/>
        </div>
        <div className="home__row">
          <Product 
            id='12354543'
            title='Keychron K2 Bluetooth Mechanical Keyboard with Gateron Red Switch/White'
            price={79.99}
            image='https://m.media-amazon.com/images/I/61efvyxdAZL._AC_SL1200_.jpg'
            rating={5}/>
          <Product
            id='737373737' 
            title='Logitech G PRO Superlight Wireless Gaming Mouse - White'
            price={229.00}
            image='https://images-na.ssl-images-amazon.com/images/I/61ykKLbddNL._AC_SL1500_.jpg'
            rating={5}/>
          <Product 
            id='123765'
            title='
            Razer Viper Mini - Wired Gaming Mouse'
            price={37.03}
            image='https://m.media-amazon.com/images/I/81hn2q+MzsL._AC_SL1500_.jpg'
            rating={4}/>
        </div>
        <div className="home__row">
          <Product 
            id='987456'
            title='LG 34WN80C-B 34 inch 21:9 Curved UltraWide WQHD IPS Monitor with USB Type-C Connectivity sRGB 99 Percentage Color Gamut and HDR10 Compatibility, Black'
            price={525.00}
            image='https://images-na.ssl-images-amazon.com/images/I/81WBbFOEHwL._AC_SL1500_.jpg'
            rating={4}/>
        </div>
      </div>
    </div>
  )
}

export default Home