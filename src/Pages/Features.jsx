import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
const Features = () => {
    return (
        <div id="carouselExample" class="carousel slide">
            <h1 className='text-center my-4' style={{ color: '#ff5733', fontFamily: 'Arial', fontSize: '3em', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>WELCOME TO FEATURES PAGE</h1>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://i.pinimg.com/474x/95/fd/47/95fd47188d3471e804e52a80b139e623.jpg" class="d-block w-100" alt="..." width={"100%"} height={"500px"} />
                </div>
                
            </div>
        </div>
    )
}

export default Features