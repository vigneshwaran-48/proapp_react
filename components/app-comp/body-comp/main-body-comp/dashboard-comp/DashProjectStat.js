import React, { useContext } from "react";
import { Theme } from "../../../../App";

let DashProjectStat = () => {

    const theme = useContext(Theme).theme;

    return (
        <div 
            className="sub-dash-box"
            style={{
                backgroundColor : theme.backgroundColor,
                color : theme.color
            }}
        >

        </div>
    )
}

export default DashProjectStat;