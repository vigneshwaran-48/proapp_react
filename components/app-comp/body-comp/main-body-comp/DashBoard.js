import React, { useContext, useEffect } from "react";
import "../../../../css/app-comp/body-comp/main-body-comp/dashboard.css";
import "../../../../css/app-comp/body-comp/mainbody.css";
import { Theme } from "../../../App";
import DashCommunity from "./dashboard-comp/DashCommunity";
import DashFriends from "./dashboard-comp/DashFriends";
import DashProjectStat from "./dashboard-comp/DashProjectStat";
import DashTaskStat from "./dashboard-comp/DashTaskStat";

let DashBoard = () => {
    
    const context = useContext(Theme);
    const theme = context.theme;

    useEffect(() => context.setCurrentSection("Dashboard"));

    return (
        <main 
            className="middle-body x-axis-flex flex-center"
            style={{
                backgroundColor : theme.subBackgroundColor,
                color : theme.color
            }}
        >
            <div className="dashboard-sub-comp-wrapper x-axis-flex">
                <DashProjectStat />
                <DashFriends />
                <DashCommunity />
                <DashTaskStat />
            </div>
        </main>
    );
}

export default DashBoard;
