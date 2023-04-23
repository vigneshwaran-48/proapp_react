import React, { useContext, useEffect } from "react";
import Header from "./body-comp/Header";
import MainBody from "./body-comp/MainBody";
import "../../css/app-comp/body.css";
import { Undo } from "../App";

const Body = () => {

    const { undo, updateUndo } = useContext(Undo);

    useEffect(() => {
        window.addEventListener("click", event => {
            undo.performUndo(event);
        });
        window.addEventListener("keydown", event => {
            if(event.key === "Escape") {
                undo.performUndo(event);
            }
        })
    }, []);

    return (
        <section className="app-body y-axis-flex">
            <Header />
            <MainBody />
        </section>  
    )
}
export default Body;