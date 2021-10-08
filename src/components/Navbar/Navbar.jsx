import React from 'react'
import './Navbar.css'
import cart from '../../images/cart.svg'
import profile from '../../images/profile.svg'

function Navbar() {
    return (
        <div className="nav">
            <span className="brand">E-Mart</span>
            <div className="nav-item">
                <img src={cart} alt="cart icon" className="cart"/>
                <img src={profile} alt="profile icon" className="profile"/>
            </div>
        </div>
    )
}

export default Navbar
