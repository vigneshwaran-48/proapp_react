import React from "react";
import Body from "./app-comp/Body";
import SideNavBar from "./app-comp/SideNavBar";
import "../css/app.css";
import { getCurrentUserDetails } from "../api/CurrentUser";

export const Theme = React.createContext();
export const BasicDetails = React.createContext();
export const Undo = React.createContext();

export const themeCollections = {
    darkTheme : {
        color : "white",
        backgroundColor : "#2B2B2B",
        subBackgroundColor: "#423F3E",
        navIconClass : "dark-theme-icons",
        borderColor : "white",
        innerProjectBoxBackgroundColor : "#413F42"
    },
    lightTheme : {
        color : "black",
        backgroundColor : "rgb(254,255,254)",
        subBackgroundColor: "rgba(0, 0, 0, 0.07)",
        navIconClass : "light-theme-icons",
        borderColor : "#FEFCF3",
        innerProjectBoxBackgroundColor : "rgba(0, 0, 0, 0.07)"
    }
}
const undo = {
    performUndo : () => console.log("Undo ...")
}
const updateUndo = undoFunc => {
    undo.performUndo = undoFunc;
}

let App = () => {

    const [theme, setTheme] = React.useState({
        isDark : false,
        theme : themeCollections.lightTheme
    });
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
        window.addEventListener("click", event => {

        });
    }, []);

    const updatedUserDetails = updatedDetails => {
        setUserDetails(prevDetails => ({...prevDetails, updatedDetails}));
    }

    const handleThemeChange = theme => {
        setTheme(prevTheme => ({isDark : !prevTheme.isDark, theme}));
    }
    const handleSectionChange = sectionName => {
        setCurrentSection(sectionName);
    } 

    return (
        <Undo.Provider value={{
            undo,
            updateUndo
        }}>
            <BasicDetails.Provider value={
                {
                    userDetails,
                    updatedUserDetails
                }
            }>
                <Theme.Provider value={
                    {
                        theme : theme.theme, 
                        isDark : theme.isDark,
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
        </Undo.Provider>
    );
}

export default App;