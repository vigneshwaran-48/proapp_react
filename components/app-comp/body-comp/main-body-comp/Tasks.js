import React, { useContext, useEffect } from "react";
import "../../../../css/app-comp/body-comp/main-body-comp/tasks.css";
import "../../../../css/app-comp/body-comp/mainbody.css";
import { Theme } from "../../../App";

let Tasks = () => {

    const context = useContext(Theme);
    const theme = context.theme;

    useEffect(() => context.setCurrentSection("Tasks"));

    return (
        <main 
            className="middle-body"
            style={{
                backgroundColor : theme.subBackgroundColor,
                color : theme.color
            }}
        >
            <h2>This is tasks</h2>
        </main>
    )
}

export default Tasks;