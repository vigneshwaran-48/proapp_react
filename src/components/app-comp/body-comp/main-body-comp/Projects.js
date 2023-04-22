import React, { useContext, useEffect, useState } from "react";
import GetProjects from "../../../../api/projects/GetProjects";
import "../../../../css/app-comp/body-comp/main-body-comp/projects.css";
import "../../../../css/app-comp/body-comp/mainbody.css";
import { Theme } from "../../../App";
import ProjectBox from "./project-comp/ProjectBox";
import ProjectBoxWrapper from "./project-comp/ProjectBoxWrapper";
import ProjectsHeader from "./project-comp/ProjectsHeader";


let Projects = () => {

    const ALL = "ALL";
    const YET_TO_START = "YET_TO_START";
    const IN_PROGRESS = "IN_PROGRESS";
    const COMPLETED = "COMPLETED";
    const DELAYED = "DELAYED";

    const context = useContext(Theme);
    const theme = context.theme;

    const [displayBoxes, setDisplayBoxes] = useState(ALL);
    const [yetToStart, setYetToStart] = useState([]);
    const [inProgress, setInProgress] = useState([]);
    const [completed, setCompleted] = useState([]);
    const [delayed, setDelayed] = useState([]);

    useEffect(() => {
        context.setCurrentSection("Projects");
        //This is for closing all other tabs when the screen size comes to 500.
        let resizeFunc = () => {
            const {width} = window.screen;
            width <= 500 
            ? setDisplayBoxes(prevDisplayBoxes => {
               return prevDisplayBoxes === ALL ? YET_TO_START : prevDisplayBoxes
            }) 
            : setDisplayBoxes(ALL);
        }
        resizeFunc();//Calling here for working while switching between tabs
        window.addEventListener("resize", resizeFunc );//This is for screen resizing
        window.addEventListener("load", resizeFunc);//This is for page refreshing
    }, []);

    useEffect(() => {
        const yetToStartProjects = GetProjects.getYetToStartProjects();
        const inProgressProjects = GetProjects.getInProgressProjects();
        const completedProjects = GetProjects.getCompletedProjects();
        const delayedProjects = GetProjects.getDelayedProjects();

        setYetToStart(yetToStartProjects);
        setInProgress(inProgressProjects);
        setCompleted(completedProjects);
        setDelayed(delayedProjects);
    }, []);

    const yetToStartProjects = yetToStart.map(elem => 
        <ProjectBox key={elem.projectId} projectDetails={elem} />
    );
    const inProgressProjects = inProgress.map(elem => 
        <ProjectBox key={elem.projectId} projectDetails={elem} />    
    );

    const completedProjects = completed.map(elem => 
        <ProjectBox key={elem.projectId} projectDetails={elem} />  
    );
    const delayedProjects = delayed.map(elem => 
        <ProjectBox key={elem.projectId} projectDetails={elem} />  
    );

    return (
        <main 
            className="middle-body y-axis-flex"
            style={{
                backgroundColor : theme.subBackgroundColor,
                color : theme.color
            }}
        >
            <ProjectsHeader updateCurrentTab={setDisplayBoxes} />
            
            <div className="projects-body x-axis-flex">
            {
                (displayBoxes === ALL || displayBoxes === YET_TO_START) && 
                <ProjectBoxWrapper 
                    heading="Yet To Start"
                    projectBoxes={yetToStartProjects} 
                />
            }
            {
                (displayBoxes === ALL || displayBoxes === IN_PROGRESS) &&
                <ProjectBoxWrapper 
                    heading="In Progress"
                    projectBoxes={inProgressProjects} 
                />
            }
            {
                (displayBoxes === ALL || displayBoxes === COMPLETED) &&
                <ProjectBoxWrapper 
                    heading="Completed"
                    projectBoxes={completedProjects} 
                />
            }
            {
                (displayBoxes === ALL || displayBoxes === DELAYED) && 
                <ProjectBoxWrapper 
                    heading="Delayed"
                    projectBoxes={delayedProjects} 
                />
            }
            </div>
        </main>
    );
}

export default Projects;