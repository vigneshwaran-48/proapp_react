import GetProjects from "./GetProjects";

const SearchProjects = {

    searchProject : searchQueryParams => {
        if(searchQueryParams.projectType === "ALL") {
            let results = GetProjects.getCompletedProjects();
            results.push(...GetProjects.getDelayedProjects());
            results.push(...GetProjects.getInProgressProjects());
            results.push(...GetProjects.getYetToStartProjects());
            let filtered = results.filter(elem => elem
                                                    .title
                                                    .toLowerCase()
                                                    .includes(
                                                        searchQueryParams.query.toLowerCase()
                                                    ));
            return filtered;
        }
        else if(searchQueryParams.projectType === "YET_TO_START") {
            let results = GetProjects.getYetToStartProjects();
            let filtered = results.filter(elem => elem
                                                    .title
                                                    .toLowerCase()
                                                    .includes(
                                                        searchQueryParams.query.toLowerCase()
                                                    ));
            return filtered;
        }
        else if(searchQueryParams.projectType === "IN_PROGRESS") {
            let results = GetProjects.getInProgressProjects();
            let filtered = results.filter(elem => elem
                                                    .title
                                                    .toLowerCase()
                                                    .includes(
                                                        searchQueryParams.query.toLowerCase()
                                                    ));
            return filtered;
        }
        else if(searchQueryParams.projectType === "COMPLETED") {
            let results = GetProjects.getInProgressProjects();
            let filtered = results.filter(elem => elem
                                                    .title
                                                    .toLowerCase()
                                                    .includes(
                                                        searchQueryParams.query.toLowerCase()
                                                    ));
            return filtered;
        }
        else if(searchQueryParams.projectType === "DELAYED") {
            let results = GetProjects.getInProgressProjects();
            let filtered = results.filter(elem => elem
                                                    .title
                                                    .toLowerCase()
                                                    .includes(
                                                        searchQueryParams.query.toLowerCase()
                                                    ));
            return filtered;
        }
        else {
            return {
                description : "Wrong input"
            }
        }
    }
}

export default SearchProjects;