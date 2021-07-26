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
                </div>
                <div className="header_option">
                <span className="header_optionLineTwo">Sign In</span>
                </div>
                <div className="header_option">

                </div>
                <div className="header_option">

                </div>
            
            </div>
        </div>
    )
}

export default Header
