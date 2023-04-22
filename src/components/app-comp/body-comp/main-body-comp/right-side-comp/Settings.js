import React, { useContext } from "react";
import "../../../../../css/app-comp/body-comp/main-body-comp/right-side-comp/settings.css";
import { Theme } from "../../../../App";
import 'font-awesome/css/font-awesome.min.css';

let Settings = props => {

    const theme = useContext(Theme).theme;
    
    return (
            <div 
                className="settings-page right-side-inner-page"
                style={{
                    backgroundColor : theme.backgroundColor,
                    color : theme.color
                }}    
            >
                <i 
                    className="fa-solid fa-xmark right-section-close-button"
                    onClick={props.closeRightSection}
                ></i>
                <h3>Settings</h3>
            </div>
    );
}

export default Settings;