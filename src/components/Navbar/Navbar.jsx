import React from 'react'
import './Navbar.css'



function Navbar(props) {
    return (
        <div className="nav">
            <span className="brand">E-Mart</span>
            <div className="nav-item">
                <img src={process.env.PUBLIC_URL + '/images/cart.svg'} alt="cart icon" className="cart"/>
                <img src={process.env.PUBLIC_URL + '/images/profile.svg'} alt="profile" className="profile"/>
            </div>
        </div>
    )
}

export default Navbar
