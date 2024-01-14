import React from 'react'
import "./index.css";

const Nav = () => {
  return (
    <div>
        <nav className='container'>
            <div className="leftEle">
                <img src="/brand_logo.jpg" alt="logo" />
            </div>
            <ul>
                <li href="#">MENU</li>
                <li href="#">LOCATION</li>
                <li href="#">ABOUT</li>
                <li href="#">CONTACT</li>
            </ul>
            
            <button className="rightEle">
                Login
            </button>

        </nav>
      
    </div>
  )
}

export default Nav
