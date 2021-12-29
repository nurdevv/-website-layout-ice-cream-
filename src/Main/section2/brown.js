import React from 'react';
import './cetion2.css'
import ice from './nWvlMBTo86-removebg-preview 1.png'


const Brown = () => {
    return (
        <div className='main_sec2'>
            <div className="text_sec2">
                <h4>
                    Brown Sugar <br/> Oatmea
                </h4>
                <p className="p_sec2">
                    Together with McDonald’s, Burger King has grown to become <br/>
                    synonymous with burgers in the US.Together with McDonald’s, <br/>
                    Burger King has grown to become synonymous.
                </p>
                <button className='button_sec2'>
                    <a className='button_sec2_a'
                       href="https://online.gipermarket.kg/catalog/svezhie_produkty_i_gastronomiya/zamorozhennye_produkty_1/morozhenoe_1/?PAGE_EL_COUNT=ALL">
                        See Details</a>
                </button>
            </div>
            <div className="img_sec2">
                <img src={ice} alt="" className="img_sec2"/>
            </div>
        </div>
    );
};

export default Brown;