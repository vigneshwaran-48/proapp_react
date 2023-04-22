import React, { useContext } from "react";
import "../../../../../css/app-comp/body-comp/main-body-comp/right-side-comp/profile.css";
import "../../../../../css/app-comp/body-comp/main-body-comp/right-side-comp/settings.css";
import { BasicDetails, Theme, themeCollections } from "../../../../App";
import 'font-awesome/css/font-awesome.min.css';

let MinProfile = props => {

    const { theme, isDark, setTheme } = useContext(Theme);
    const { userDetails } = useContext(BasicDetails);

    const changeTheme = () => {
        isDark 
            ? setTheme(themeCollections.lightTheme) 
            : setTheme(themeCollections.darkTheme)
        // setTheme
    }

    return (
            <div 
                className="profile-page right-side-inner-page y-axis-flex"
                style={{
                    backgroundColor : theme.backgroundColor,
                    color : theme.color
                }}    
            >
                <i 
                    className="fa-solid fa-xmark right-section-close-button"
                    onClick={props.closeRightSection}
                ></i>
                <div className="min-profile-top flex-center x-axis-flex">
                    <div className="y-axis-flex flex-center">
                        <div 
                            style={{
                                backgroundImage : `url(${userDetails.userImage})`
                            }}
                            className="min-profile-photo background-image-div"
                        ></div>
                        <p className="min-profile-name">{userDetails.userName}</p>
                    </div>
                </div>
                <div className="min-profile-bottom y-axis-flex">
                    <div 
                        className="setting-heading"
                        style={{
                            backgroundColor : theme.subBackgroundColor
                        }}
                    >
                        <p>Settings</p>
                    </div>
                    <div className="settings-options">
                        <div className="edit-profile-button common-setting-button x-axis-flex">
                            <i id="setting-icon" className="fa-solid fa-gear"></i>
                            <p className="setting-button-text">Edit</p>
                            <span className="setting-button-right-icon">{">"}</span>
                        </div>
                        <div className="theme-profile-button common-setting-button x-axis-flex">
                            <i id="moon-icon" className="fa fa-light fa-moon"></i>
                            <p className="setting-button-text">Dark Theme</p>
                            <label 
                                style={{
                                    backgroundColor : isDark
                                                    ? "rgb(64,142,238)"
                                                    : "rgba(0, 0, 0, 0.1)"
                                }}      
                                htmlFor="theme-switch-input" 
                                className="theme-switch-label x-axis-flex">
                                <input 
                                    type="checkbox" 
                                    id="theme-switch-input"
                                    checked={isDark}
                                    onChange={changeTheme}
                                />
                                <span className="theme-switch-ball"></span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default MinProfile;