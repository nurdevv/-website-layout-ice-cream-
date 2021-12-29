import React from "react";
import Header from "./Header";
import Free from "./Main/section1";
import Brown from "./Main/section2";
import Product from "./Main/section3";
import Cayenne from "./Main/section4";
import Simple from "./Main/section5";
import Question from "./Main/section6/Question";
import Footer from "./Footer";


class App extends React.Component{
    render() {
        return (
            <>
                <Header/>
                <Free/>
                <Brown/>
                <Product/>
                <Cayenne/>
                <Simple/>
                <Question/>
                <Footer/>
            </>
        )
    }
}
export default App