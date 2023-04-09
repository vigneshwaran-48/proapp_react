import React from "react";
import "../../../../../css/app-comp/body-comp/main-body-comp/project-comp/project-box.css";

let ProjectBox = props => {

    const details = props.projectDetails;

    const userImages = details.users.map((elem, index) => {
        return (
            <div 
                className={`person-image-wrapper person-${index + 1}`}
                key={`pro-box-${details.projectId}-${elem.userId}`}
            >
                <div 
                    className="person-image" 
                    style={{
                        backgroundImage : elem.url
                    }}>
                </div>
            </div>
        );
    });

    return (
        <div 
            className="main-box y-axis-flex" 
            id="project-359"
        >
            <div className="top-box-detail x-axis-flex">
                <h2 className="box-name">
                    {details.title}
                </h2>
                <div className="three-dots-wrapper">
                    <label 
                        className="three-dotthree-dots-task-input-label" 
                        htmlFor="three-dots359"
                    >
                        <i className="fa-solid fa-ellipsis"></i>
                    </label>
                    <input className="three-dots" id="three-dots359" />
                    <ul className="three-dots-options-wrapper light-theme">
                        <li 
                            className="three-dots-option three-dots-edit-option" 
                        >Edit</li>
                        <li 
                            className="three-dots-option three-dots-more-info" 
                        >More Info</li>
                        <li 
                            className="three-dots-option three-dots-complete-option"
                        >Delete</li>
                    </ul>
                </div>
            </div>
            <div className="box-description">
                {details.description}
            </div>
            <div className="box-percentage-wrapper">
                <div 
                    className="box-percentage-value" 
                    style={{}}
                >
                    {details.percentage}%
                </div>
            </div>
            <div className="all-people-wrapper x-axis-flex">
                {userImages}
            </div>
        </div>
    );
}

export default ProjectBox;