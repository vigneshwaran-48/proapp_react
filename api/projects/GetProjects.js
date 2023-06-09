const GetProjects = {
    getYetToStartProjects : () => {
        return [
            {
                users : [
                    {
                        userId : 12,
                        url : "https://www.forbesindia.com/media/images/2022/Aug/img_192351_viratkohli.jpg"
                    },
                    {
                        userId : 14,
                        url : "https://i.ytimg.com/vi/Ddk9ci6geSs/maxresdefault.jpg"
                    }
                ],
                title : "Project 01",
                description : "Hello",
                percentage : 40,
                projectId : 1,
                type : "YET_TO_START"
            },
            {
                users : [
                    {
                        userId : 12,
                        url : "https://www.forbesindia.com/media/images/2022/Aug/img_192351_viratkohli.jpg"
                    },
                    {
                        userId : 14,
                        url : "https://i.ytimg.com/vi/Ddk9ci6geSs/maxresdefault.jpg"
                    }
                ],
                title : "Project 02",
                description : "Test",
                percentage : 40,
                projectId : 2,
                type : "YET_TO_START"
            }
        ]
    },
    
    getInProgressProjects : () => {
    
        return [
            {
                users : [
                    {
                        userId : 12,
                        url : "https://www.forbesindia.com/media/images/2022/Aug/img_192351_viratkohli.jpg"
                    },
                    {
                        userId : 17,
                        url : "https://i.ytimg.com/vi/Ddk9ci6geSs/maxresdefault.jpg"
                    },
                    {
                        userId : 21,
                        url : "https://i.ytimg.com/vi/Ddk9ci6geSs/maxresdefault.jpg"
                    },
                    {
                        userId : 90,
                        url : "https://i.ytimg.com/vi/Ddk9ci6geSs/maxresdefault.jpg"
                    },
                    {
                        userId : 91,
                        url : "https://i.ytimg.com/vi/Ddk9ci6geSs/maxresdefault.jpg"
                    }
                ],
                title : "Project 87687",
                description : "complete this",
                percentage : 40,
                projectId : 3,
                type : "IN_PROGRESS"
            }
        ]
    },
    
    getCompletedProjects : () => {
        return [
            {
                users : [
                    {
                        userId : 12,
                        url : "https://www.forbesindia.com/media/images/2022/Aug/img_192351_viratkohli.jpg"
                    },
                    {
                        userId : 14,
                        url : "https://i.ytimg.com/vi/Ddk9ci6geSs/maxresdefault.jpg"
                    }
                ],
                title : "Completed project",
                description : "project completed ...",
                percentage : 40,
                projectId : 4,
                type : "COMPLETED"
            }
        ]
    },
    getDelayedProjects : () => {
        return [
            {
                users : [
                    {
                        userId : 12,
                        url : "https://www.forbesindia.com/media/images/2022/Aug/img_192351_viratkohli.jpg"
                    }
                ],
                title : "Delayed project",
                description : "project completed ...",
                percentage : 40,
                projectId : 5,
                type : "DELAYED"
            }
        ]
    }
}


export default GetProjects;