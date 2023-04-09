import React, { useContext } from "react";
import "../../../../../css/app-comp/body-comp/main-body-comp/right-side-comp/settings.css";
import { Theme } from "../../../../App";

let Settings = () => {

    const theme = useContext(Theme).theme;
    
    return (
        <div className="shadow-screen">
            <div 
                className="settings-page"
                style={{
                    backgroundColor : theme.backgroundColor,
                    color : theme.color
                }}    
            >
                
            </div>
        </div>
    );
}

export default Settings;