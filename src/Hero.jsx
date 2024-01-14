import React from 'react'
import "./index.css";

const Hero = () => {
  return (
    <div className='Hero container'>
      <div className="left">
        <h1>YOU DESERVE THE BEST</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius voluptate maxime velit explicabo totam nam nesciunt ullam harum repellat sequi odio nisi, eos, rem, sit ad ea? Exercitationem, quisquam deserunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quas laudantium enim odio ut minima nam exercitationem reiciendis atque. Nobis?</p>
        <div className="heroBtn">
            <button>SHOP NOW</button>
            <button className='secondary-btn'>CATEGORY</button>
        </div>
        <div className='shopping'>
          <p>Also Available On</p>
          <div className="brand-icons">
            <img src="./amazon.png" alt="" />
            <img src="./flipkart.png" alt="" />
          </div>
        
        </div>
        
      </div>

      <div className="right">
        <img src="./shoe_image.png" alt="image" />
      </div>
    </div>
  )
}

export default Hero
