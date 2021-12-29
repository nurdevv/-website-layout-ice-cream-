import React from 'react';
import './style.sec3.css'
import ice31 from './ice3.1.png'
import ice32 from './Rectangle 78.png'
import ice33 from './Rectangle 79 (1).png'


const Product = () => {
    return (
        <div>
            <h5>Our Product</h5>
            <div className="menu">
                <a href="">
                    ICE CREAM
                </a>
                <a href="">
                    CAYENNE CHOCOLATE
                </a>
                <a href="">
                    CAKE BATTER
                </a>
                <a href="">
                    CANDY CANE
                </a>
                <a href="">
                    PLATTERS
                </a>
                <a href="">
                    DESSERT
                </a>
            </div>

            <div className="main_products1">
                <div className="products">
                    <img src={ice31} alt="" className="img.products1"/>
                </div>

                <div className="text_products">
                    <h6 className='h6_products'>Brown bread</h6>
                    <p className="p_products">
                        Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au <br/>
                        Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a <br/>
                        pioneer in the healthy fast food scene.
                    </p>
                    <p className="p_price">
                        <p className="p_price1">
                            $19.55
                        </p>
                        <p className="p_price2">
                            $22.55
                        </p>
                    </p>

                    <button className='products1_button'>
                        <a href="https://online.gipermarket.kg/personal/order/make/" className="products1_button_a">Buy
                            Now</a>
                    </button>

                </div>

            </div>

            {/*second  section in third  section*/}

            <div className="bon">
                <div className="text_products">
                    <h6 className='h6_products2'>Cayenne chocolate</h6>
                    <p className="p2_products">
                        Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au <br/>
                        Pain is a pioneer in the healthy fast food scene.Bon Au Pain is <br/>
                        a pioneer in the healthy fast food scene.
                    </p>
                    <p className="p_price5">
                        <p className="p_price3">
                            $19.55
                        </p>
                        <p className="p_price4">
                            $22.55
                        </p>
                    </p>

                    <button className='products1_button2'>
                        <a href="https://online.gipermarket.kg/personal/order/make/" className="products1_button2_a">Buy
                            Now</a>
                    </button>


                </div>

                <div className="products2">
                    <img src={ice32} alt="" className="img.products1.2"/>
                </div>
            </div>

            <div className="sweet">

                <div className="sweet_2">
                    <div className="products_sweet">
                        <img src={ice33} alt="" className="img.products1.sweet"/>
                    </div>

                    <div className="text_products_sweet">
                        <h2 className='h5_products_sweet'>Sweet corn</h2>
                        <p className="p_products_sweet">
                            Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au <br/>
                            Pain is a pioneer in the healthy fast food scene.Bon Au Pain is a <br/>
                            pioneer in the healthy fast food scene.
                        </p>
                        <p className="p_price_sweet">
                            <p className="p_price1_sweet">
                                $19.55
                            </p>
                            <p className="p_price2_sweet">
                                $22.55
                            </p>
                        </p>

                        <button className='products1_button_sweet'>
                            <a href="https://online.gipermarket.kg/personal/order/make/"
                               className="products1_button_a_sweet">Buy Now</a>
                        </button>

                    </div>
                </div>


            </div>


        </div>
    );
};

export default Product;