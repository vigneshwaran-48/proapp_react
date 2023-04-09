import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "../../css/app-comp/sidenavbar.css";
import 'font-awesome/css/font-awesome.min.css';
import { Theme } from "../App";

let SideNavBar = () => {
    const themeWrapper = useContext(Theme);
    const theme = themeWrapper.theme;

    return (
        <nav 
            className={`y-axis-flex`} 
            id="side-nav-bar"
            style={{
                backgroundColor : theme.backgroundColor,
                color : theme.color,
                borderColor : theme.borderColor
            }}
        >

            <img src="app-icon.png" className="app-icon" alt="app-icon"/>

            <NavLink to="/"
                className={({isActive}) => 
                    isActive 
                            ? `side-nav-link active-side-nav` 
                            : `side-nav-link ${theme.navIconClass}`
                }
                style={{
                    backgroundColor : theme.backgroundColor
                }}
            >
                <i className="fa-solid fa-house"></i>
            </NavLink>

            <NavLink to="projects"
                className={({isActive}) => 
                    isActive 
                            ? `side-nav-link active-side-nav` 
                            : `side-nav-link ${theme.navIconClass}`
                }
                style={{
                    backgroundColor : theme.backgroundColor
                }}
            >
                <i className="fa-solid fa-bars-progress"></i>
            </NavLink>

            <NavLink to="tasks"
                className={({isActive}) => 
                    isActive 
                            ? `side-nav-link active-side-nav` 
                            : `side-nav-link ${theme.navIconClass}`
                }
                style={{
                    backgroundColor : theme.backgroundColor
                }}
            >
                <i className="fa-solid fa-list-check"></i>
            </NavLink>

            <NavLink to="chat"
                className={({isActive}) => 
                    isActive 
                            ? `side-nav-link active-side-nav` 
                            : `side-nav-link ${theme.navIconClass}`
                }
                style={{
                    backgroundColor : theme.backgroundColor
                }}
            >
                <i className="fa-regular fa-message"></i>
            </NavLink>
        </nav>
    )
}

export default SideNavBar;