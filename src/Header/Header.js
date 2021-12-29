import React from 'react';
import polar from './images-removebg-preview 1.png'
import './style.css'
import h1 from './h1.png'
import ice1 from './ice1.png'
import ice2 from './ice2.png'

const Header = () => {
    return (
        <div className='header'>
            <header className='menu_and_icon'>
            <div className="logo">
                <img src={polar} alt="logo"/>
            </div>
            <ul className='menu'>
                <li>Home</li>
                <li>Product</li>
                <li>Pricing</li>
                <li>Testimonials</li>
                <li>Contact Us</li>
            </ul>
            {/*<button className='button'>Buy Now</button>*/}

        </header>
            <div className="section_in_header">
                <div className="sec1">
                    <h6>Sweet fun, full of milk.</h6>
                    <img className='h1' src={h1} alt="h1"/>
                    <p className='p_sec1'>Some food has looked so awful that it's looked like something that <br/> the dog's brought home, yet after one mouthful I've been left <br/> eating my thoughts, my words.</p>
                </div>
                <div className="sec2">

                    <img className='ice' src={ice1}  alt=""/>
                    <img className='ice2' src={ice2} alt=""/>
                </div>
            </div>
        </div>

    );
};

export default Header;