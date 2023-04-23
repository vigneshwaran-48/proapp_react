import React, { useContext } from "react";
import "../../../../../css/app-comp/body-comp/main-body-comp/project-comp/project-box.css";
import { Theme } from "../../../../App";

let ProjectBox = props => {

    const details = props.projectDetails;
    const {theme} = useContext(Theme);

    const userImages = details.users.map((elem, index) => {
        return index <= 2 && (
            <div 
                className={`person-image-wrapper person-${index + 1} background-image-div`}
                key={`pro-box-${details.projectId}-${elem.userId}`}
                style={{
                        backgroundImage : `url(${elem.url})`
            }}></div>
        );
    });
    // If users count is greater than 3 then this will take care
    details.users.length > 2 && userImages.push((
        <div 
                className={`person-image-wrapper person-4 background-image-div x-axis-flex flex-center`}
                key="extra-projects-photo"
                style={{
                    backgroundColor : theme.backgroundColor
                }}
        >
            <p style={{fontSize: "20px"}}>{`+${details.users.length - 3}`}</p>        
        </div>
    ));

    return (
        <div 
            style={{
                backgroundColor : theme.innerProjectBoxBackgroundColor
            }}
            className="main-box y-axis-flex" 
            id={`project-${details.projectId}`}
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
            <div 
                style={{
                    backgroundColor : theme.backgroundColor
                }}
                className="box-percentage-wrapper"
            >
                <div 
                    className="box-percentage-value" 
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