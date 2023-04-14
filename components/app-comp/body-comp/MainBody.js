import React from "react";
import { Route, Routes } from "react-router-dom";
import "../../../css/app-comp/body-comp/mainbody.css";
import Chat from "./main-body-comp/Chat";
import DashBoard from "./main-body-comp/DashBoard";
import Projects from "./main-body-comp/Projects";
import Tasks from "./main-body-comp/Tasks";
import Profile from "./main-body-comp/right-side-comp/MinProfile";

const MainBody = () => {
    return (
        <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="projects" element={<Projects />} />    
            <Route path="tasks" element={<Tasks />} />
            <Route path="chat" element={<Chat />} />
            <Route path="profile" element={<Profile />} />
        </Routes>
    )
}

export default MainBody;