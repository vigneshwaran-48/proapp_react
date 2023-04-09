import React from "react";
import { Route, Routes } from "react-router-dom";
import "../../../css/app-comp/body-comp/mainbody.css";
import Chat from "./main-body-comp/Chat";
import DashBoard from "./main-body-comp/DashBoard";
import Projects from "./main-body-comp/Projects";
import Tasks from "./main-body-comp/Tasks";
import Settings from "./main-body-comp/right-side-comp/Settings";
import Notification from "./main-body-comp/right-side-comp/Notification";
import Profile from "./main-body-comp/right-side-comp/Profile";

const MainBody = () => {
    return (
        <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="projects" element={<Projects />} />    
            <Route path="tasks" element={<Tasks />} />
            <Route path="chat" element={<Chat />} />
            <Route path="settings" element={<Settings />} />    
            <Route path="notification" element={<Notification />} />
            <Route path="profile" element={<Profile />} />
        </Routes>
    )
}

export default MainBody;