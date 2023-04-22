import React, { useContext } from "react";
import "../../../../../css/app-comp/body-comp/main-body-comp/right-side-comp/notification.css";
import "../../../../../css/app-comp/body-comp/main-body-comp/right-side-comp/settings.css";
import { Theme } from "../../../../App";
import 'font-awesome/css/font-awesome.min.css';

let Notification = props => {

    const theme = useContext(Theme).theme;

    return (
            <div 
                className="notification-page right-side-inner-page"
                style={{
                    backgroundColor : theme.backgroundColor,
                    color : theme.color
                }}
            >    
                <i 
                    className="fa-solid fa-xmark right-section-close-button"
                    onClick={props.closeRightSection}
                ></i>
                <h3>Notification</h3>
            </div>
    );
}

export default Notification;