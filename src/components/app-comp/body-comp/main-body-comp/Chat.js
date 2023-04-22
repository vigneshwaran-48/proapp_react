import React, { useContext, useEffect } from "react";
import "../../../../css/app-comp/body-comp/main-body-comp/chat.css";
import "../../../../css/app-comp/body-comp/mainbody.css";
import { Theme } from "../../../App";

let Chat = () => {

    const context = useContext(Theme);
    const theme = context.theme;

    useEffect(() => context.setCurrentSection("Chat"));

    return (
        <main 
            className="middle-body"
            style={{
                backgroundColor : theme.subBackgroundColor,
                color : theme.color
            }}
        >
            <h2>This is chat</h2>
        </main>
    )
}

export default Chat;