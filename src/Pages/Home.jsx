import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
const Home = () => {
  return (
      <div id="carouselExample" class="carousel slide">
        <h1 className='text-center my-4' style={{ color: '#ff5733', fontFamily: 'Arial', fontSize: '3em', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>WELCOME TO HOME PAGE</h1>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://i.pinimg.com/474x/15/00/c8/1500c8ede13ecd6d6b439fc4e877d764.jpg" class="d-block w-100" alt="..." height={"500px"}/>
    </div>
    
  </div>
</div>
  )
}

export default Home