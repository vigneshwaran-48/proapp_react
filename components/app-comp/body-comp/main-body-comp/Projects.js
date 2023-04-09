import React, { useContext, useEffect } from "react";
import "../../../../css/app-comp/body-comp/main-body-comp/projects.css";
import "../../../../css/app-comp/body-comp/mainbody.css";
import { Theme } from "../../../App";
import ProjectBox from "./project-comp/ProjectBox";


let Projects = () => {

    const context = useContext(Theme);
    const theme = context.theme;

    useEffect(() => context.setCurrentSection("Projects"));

    return (
        <main 
            className="middle-body x-axis-flex"
            style={{
                backgroundColor : theme.subBackgroundColor,
                color : theme.color
            }}
        >
            <div className="project-box-wrapper y-axis-flex">
                <ProjectBox
                    projectDetails={
                        {
                            users : [
                                {
                                    userId : 12,
                                    url : ""
                                },
                                {
                                    userId : 14,
                                    url : ""
                                }
                            ],
                            title : "Project 01",
                            description : "Hello",
                            percentage : 40
                        }
                    }    
                 />
            </div>
            <div className="project-box-wrapper y-axis-flex">
                <ProjectBox
                    projectDetails={
                        {
                            users : [
                                {
                                    userId : 12,
                                    url : ""
                                },
                                {
                                    userId : 14,
                                    url : ""
                                }
                            ],
                            title : "Project 01",
                            description : "Hello",
                            percentage : 40
                        }
                    }    
                 />
            </div>
            <div className="project-box-wrapper y-axis-flex">
                <ProjectBox
                    projectDetails={
                        {
                            users : [
                                {
                                    userId : 12,
                                    url : ""
                                },
                                {
                                    userId : 14,
                                    url : ""
                                }
                            ],
                            title : "Project 01",
                            description : "Hello",
                            percentage : 40
                        }
                    }    
                 />
            </div>
            <div className="project-box-wrapper y-axis-flex">
                <ProjectBox
                    projectDetails={
                        {
                            users : [
                                {
                                    userId : 12,
                                    url : ""
                                },
                                {
                                    userId : 14,
                                    url : ""
                                }
                            ],
                            title : "Project 01",
                            description : "Hello",
                            percentage : 40
                        }
                    }    
                 />
            </div>
        </main>
    )
}

export default Projects;