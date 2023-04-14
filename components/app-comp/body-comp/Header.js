import React, { useContext } from "react";
import "../../../css/app-comp/body-comp/header.css";
import 'font-awesome/css/font-awesome.min.css';
import { BasicDetails, Theme } from "../../App";
import Settings from "./main-body-comp/right-side-comp/Settings";
import Notification from "./main-body-comp/right-side-comp/Notification";
import MinProfile from "./main-body-comp/right-side-comp/MinProfile";

let Header = () => {

    const {theme, currentSection} = useContext(Theme);
    const {userDetails} = useContext(BasicDetails);
    const [clickedSection, setClickedSection] = React.useState({
        isTopIconsClicked : false,
        clickedIcon : ""
    });

    const handleRightPageClose = () => {
        setClickedSection({
            isTopIconsClicked : false,
            clickedIcon : ""
        });
    }
    const handleTopIconClick = event => {
        const {id} = event.target;
        setClickedSection(
            {
                isTopIconsClicked : true,
                clickedIcon : id
            }
        );
    }

    return (
        <header 
            className="app-header x-axis-flex flex-center flex-space-between-x"
            style={{
                backgroundColor : theme.backgroundColor,
                color : theme.color,
                borderColor : theme.borderColor
            }}
        >
            <h1 className="section-name">{currentSection}</h1>
            <nav className="header-nav x-axis-flex flex-center">
                {/* <i 
                    style={{
                        borderColor : clickedSection.clickedIcon === "settings" 
                                        ? "rgb(64,142,238)" : theme.backgroundColor,
                        color : clickedSection.clickedIcon === "settings" 
                                        && "rgb(64,142,238)"
                    }}
                    id="settings" 
                    className="fa-solid fa-gear top-header-icon"
                    onClick={handleTopIconClick}
                ></i> */}

                <i 
                    style={{
                        borderColor : clickedSection.clickedIcon === "notification" 
                                        ? "rgb(64,142,238)" : theme.backgroundColor,
                        color : clickedSection.clickedIcon === "notification" 
                                        && "rgb(64,142,238)"
                    }}
                    id="notification" 
                    className="fa-regular fa-bell top-header-icon"
                    onClick={handleTopIconClick}
                ></i>

                <div 
                    style={{
                        border : "none",
                        backgroundImage : `url(${userDetails.userImage})`
                    }}
                    id="profile" 
                    className="user-profile-image background-image-div top-header-icon"
                    onClick={handleTopIconClick}
                ></div>
            </nav>
            <div className={
                `shadow-screen 
                ${clickedSection.isTopIconsClicked && "show-top-right-section"}`
            }>
                {clickedSection.clickedIcon === "settings" &&
                        <Settings closeRightSection={() => handleRightPageClose()}/>}
                {clickedSection.clickedIcon === "notification" && 
                        <Notification closeRightSection={() => handleRightPageClose()}/>}
                {clickedSection.clickedIcon === "profile" && 
                        <MinProfile closeRightSection={() => handleRightPageClose()}/>}
            </div>
        </header>
    )
}

export default Header;