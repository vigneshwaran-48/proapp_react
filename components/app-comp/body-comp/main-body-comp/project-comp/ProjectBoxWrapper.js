import { useContext } from "react";
import { Theme } from "../../../../App";

const ProjectBoxWrapper = props => {

    const {theme} = useContext(Theme);
    return (
        <div 
            style={{
                backgroundColor : theme.backgroundColor
            }}
            className="project-box-wrapper y-axis-flex"
        >
            <h2 className="project-box-heading">{props.heading}</h2>
            <div className="inner-projects-box-wrapper y-axis-flex">
                {props.projectBoxes}
            </div>
        </div>
    )
}

export default ProjectBoxWrapper;