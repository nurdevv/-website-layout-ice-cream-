import React from 'react';
import './stylesec1.css'
import car from './car.png'
import bacher from './bacher.png'
import card from './card.png'
import fast from './fast-delivery 1.png'

const Free = () => {
    return (
        <div className='main'>
            <div className="sec_1">
                <div className="blacks">
                    <div className="block1">
                        <img className='img1' src={car} alt=""/>
                        <h3 className="bl1">Free Shipping</h3>
                        <p className="p_bl1">Last Chance! Free shipping on all <br/> orders ends today.</p>
                    </div>
                    <div  className="block2">
                        <img className='img1' src={bacher} alt=""/>
                        <h3 className="bl2">Quick Packaging</h3>
                        <p className="p_bl2">Last Chance! Free shipping on all <br/> orders ends today.</p>
                    </div>
                    <div className="block3">
                        <img className='img1' src={card} alt=""/>
                        <h3 className="bl3">100% Money Back</h3>
                        <p className="p_bl3">Last Chance! Free shipping on all <br/> orders ends today.</p>
                    </div>
                    <div className="block4">
                        <img className='img1' src={fast} alt=""/>
                        <h3 className="bl4">Fast Delivery</h3>
                        <p className="p_bl4">Last Chance! Free shipping on all <br/> orders ends today.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Free;