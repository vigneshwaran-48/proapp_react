import { useContext, useEffect, useRef } from "react";
import { Theme, Undo } from "../../../../App";
import "../../../../../css/app-comp/body-comp/main-body-comp/project-comp/project-header.css";

const ProjectsHeader = props => {

    const { theme } = useContext(Theme);
    const { updateUndo } = useContext(Undo);
    const filterButton = useRef(null);

    const handleFilterClick = () => {
        updateUndo(event => {      
            const elem = document.querySelector("#projects-filter-input");
            elem !== event.target 
                && (elem.checked = false);
        });
    }
    const handleFilterButtonClicks = event => {
        const { id } = event.target;
        if(id ===  `project-box-switch-yet-to-start`) {
            props.updateCurrentTab("YET_TO_START");
        } 
        else if (id === `project-box-switch-in-progress`) {
            props.updateCurrentTab("IN_PROGRESS");
        }
        else if(id === `project-box-switch-completed`) {
            props.updateCurrentTab("COMPLETED");
        }
        else if(id === `project-box-switch-delayed`) {
            props.updateCurrentTab("DELAYED");
        }
        else {
            console.log("Problem");
        }
    }
    useEffect(() => {
        document
            .querySelector(".project-box-switch-buttons")
            .addEventListener("click", handleFilterButtonClicks);
    }, []);


    return (
        <div className="projects-header x-axis-flex">
            <div className="projects-search-wrapper x-axis-flex">
                <label htmlFor="projects-seacrh-input">
                    <i 
                        className="fa-solid fa-magnifying-glass projects-seacrh-icon"
                    ></i>
                </label>
                <input 
                    style={{
                        color: theme.color,
                    }}
                    id="projects-seacrh-input"
                    className="projects-search-bar"
                />
            </div>
        
            <div className="project-buttons-wrapper x-axis-flex">
                <label htmlFor="projects-filter-input">
                    <i id="projects-filter-icon" className="fa fa-regular fa-filter"></i>
                </label>
                <input 
                    onClick={handleFilterClick}
                    type="checkbox" 
                    id="projects-filter-input" />
                <div 
                    style={{
                        backgroundColor : theme.backgroundColor
                    }}
                    className="project-box-switch-buttons y-axis-flex"
                >
                    <span 
                        id="project-box-switch-yet-to-start" 
                        className="projet-box-switch-button">Yet To Start</span>
                    <span 
                        id="project-box-switch-in-progress" 
                        className="projet-box-switch-button">In Progress</span>
                    <span 
                        id="project-box-switch-completed" 
                        className="projet-box-switch-button">Completed</span>
                    <span 
                        id="project-box-switch-delayed" 
                        className="projet-box-switch-button">Delayed</span>
                </div>
                <button className="common-button">Add</button>
            </div>
        </div>
    )
}

export default ProjectsHeader;