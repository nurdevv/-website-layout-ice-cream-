import React from 'react';
import './style.sec4.css'
import adele from './Ellipse 21.png'
import Ice from './uLkF7xc5W6-removebg-preview 1.png'


const Cayenne = () => {
    return (
        <div className='sec4'>
            <div className="adele_name">

                <div className="mc_adele">
                    <div className="adele">
                        <img src={adele} alt=""/>
                    </div>
                    <div className="adele_text">
                        <h2 className="name4">Adele A. McNeill</h2>
                        <p className="from">AMIRICAN</p>
                    </div>

                </div>

                <p className="about_me">
                    Thanks a lot for the prompt service. <br/>
                    Really appreciate. Excellence taste in Every Bite.Add <br/>
                    a joy of best Taste. Foodie Moments.
                </p>



            </div>

            <div className="ice_sec4">
                <img src={Ice} alt=""/>
            </div>
        </div>
    );
};

export default Cayenne;