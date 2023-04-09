import React from "react";
import Header from "./body-comp/Header";
import MainBody from "./body-comp/MainBody";
import "../../css/app-comp/body.css";

const Body = () => {

    return (
        <section className="app-body y-axis-flex">
            <Header />
            <MainBody />
        </section>  
    )
}
export default Body;