import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "../../../css/app-comp/body-comp/header.css";
import 'font-awesome/css/font-awesome.min.css';
import { Theme } from "../../App";

let Header = () => {

    const context = useContext(Theme);
    const theme = context.theme;

    return (
        <header 
            className="app-header x-axis-flex flex-center flex-space-between-x"
            style={{
                backgroundColor : theme.backgroundColor,
                color : theme.color,
                borderColor : theme.borderColor
            }}
        >
            <h1 className="section-name">{context.currentSection}</h1>
            <nav className="header-nav x-axis-flex flex-center">
                <NavLink to="settings"
                         className={
                            ({isActive}) => 
                                isActive 
                                    ? "nav-link active-nav-link" 
                                    : `nav-link ${theme.navIconClass}`
                         }
                >
                    <i className="fa-solid fa-gear"></i>
                </NavLink>

                <NavLink to="notification"
                         className={({isActive}) => 
                            isActive 
                                    ? "nav-link active-nav-link" 
                                    : `nav-link ${theme.navIconClass}`
                         }
                >
                    <i className="fa-regular fa-bell"></i>
                </NavLink>

                <NavLink to="profile">
                    <div className="user-profile-image background-image-div"></div>
                </NavLink>
            </nav>
        </header>
    )
}

export default Header;