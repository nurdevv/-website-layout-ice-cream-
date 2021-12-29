import React from 'react';
import cream from './Mask Group.png'
import './style.css'
import google from './google.png'
import app from './app.png'

const Simple = () => {
    return (
        <div className='main_sec5'>
            <div className="div_in_div">
                <div className="img_simple_div">
                    <img src={cream} alt="" className="img_simple"/>
                </div>

                <div className="text_sec5">
                    <h6 className="h6_sec5">
                        Simple Way To Order Your Food
                    </h6>
                    <p className="p_text_sec5">
                        Some food has looked so awful that it's looked like something that the <br/>
                        dog's brought home, yet after one mouthful I've been left eating my <br/>
                        thoughts.
                    </p>
                    <div className="img_p_g">
                        <img src={google} alt="" className="google"/>
                        <img src={app} alt="" className="app"/>
                    </div>


                </div>
            </div>


        </div>
    );
};

export default Simple;