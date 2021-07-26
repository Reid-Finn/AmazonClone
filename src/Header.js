import React from 'react';
import './Header.css';

function Header() {
    return (
        <div>
            <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
            
            
            <div className="header_searchBar">
                <input className="header_searchInput" type="text" />
                {/* Logo} */}
            
            </div>

            <div className="header_navBar">
                <div className="header_option">
                    <span className="header_optionLineOne">Hello Guest</span>
                    <span className="header_optionLineTwo">Sign In</span>
                </div>
                <div className="header_option">
                    <span className="header_optionLineTwo">Returns</span>
                    <span className="header_optionLineTwo">% Orders</span>
                </div>
                <div className="header_option">
                    <span className="header_optionLineTwo">Your</span>
                    <span className="header_optionLineTwo">Prime</span>
                </div>
            
            </div>
        </div>
    )
}

export default Header
