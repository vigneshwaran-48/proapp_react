import React, { useContext } from "react";
import "../../../../../css/app-comp/body-comp/main-body-comp/right-side-comp/profile.css";
import "../../../../../css/app-comp/body-comp/main-body-comp/right-side-comp/settings.css";
import { Theme } from "../../../../App";

let Profile = () => {

    const theme = useContext(Theme).theme;
    
    return (
        <div className="shadow-screen">
            <div 
                className="profile-page"
                style={{
                    backgroundColor : theme.backgroundColor,
                    color : theme.color
                }}    
            >
                
            </div>
        </div>
    );
}

export default Profile;