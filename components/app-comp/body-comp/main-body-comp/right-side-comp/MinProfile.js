import React, { useContext } from "react";
import "../../../../../css/app-comp/body-comp/main-body-comp/right-side-comp/profile.css";
import "../../../../../css/app-comp/body-comp/main-body-comp/right-side-comp/settings.css";
import { BasicDetails, Theme } from "../../../../App";
import 'font-awesome/css/font-awesome.min.css';

let MinProfile = props => {

    const { theme } = useContext(Theme);
    const { userDetails } = useContext(BasicDetails);

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
                        <button className="edit-profile-button common-setting-button">Edit</button>
                    </div>
                </div>
            </div>
    );
}

export default MinProfile;