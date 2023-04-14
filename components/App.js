import React from "react";
import Body from "./app-comp/Body";
import SideNavBar from "./app-comp/SideNavBar";
import "../css/app.css";
import { getCurrentUserDetails } from "../api/CurrentUser";

export const Theme = React.createContext();
export const BasicDetails = React.createContext();

export const themeCollections = {
    darkTheme : {
        color : "white",
        backgroundColor : "#2B2B2B",
        subBackgroundColor: "#423F3E",
        navIconClass : "dark-theme-icons",
        borderColor : "white"
    },
    lightTheme : {
        color : "black",
        backgroundColor : "rgb(254,255,254)",
        subBackgroundColor: "rgba(0, 0, 0, 0.07)",
        navIconClass : "light-theme-icons",
        borderColor : "#FEFCF3"
    }
}

let App = () => {

    const [theme, setTheme] = React.useState(themeCollections.darkTheme);
    const [currentSection, setCurrentSection] = React.useState("Dashboard");
    const [userDetails, setUserDetails] = React.useState({
        userId : 0,
        userName : "",
        userImage : "",
        friends : [],
        communities : []
    });
    React.useEffect(() => {
        setUserDetails(getCurrentUserDetails());
    }, []);

    const updatedUserDetails = updatedDetails => {
        setUserDetails(prevDetails => ({...prevDetails, updatedDetails}));
    }

    const handleThemeChange = theme => {
        setTheme(theme);
    }
    const handleSectionChange = sectionName => {
        setCurrentSection(sectionName);
    } 

    return (
        <BasicDetails.Provider value={
            {
                userDetails,
                updatedUserDetails
            }
        }>
            <Theme.Provider value={
                {
                    theme, 
                    setTheme : handleThemeChange,
                    currentSection,
                    setCurrentSection : handleSectionChange
                }
            }>
                <div className="app x-axis-flex flex-space-between-x ">
                    <SideNavBar />
                    <Body />
                </div>
            </Theme.Provider>
        </BasicDetails.Provider>
    );
}

export default App;