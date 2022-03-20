import React, { useState } from 'react';



const Projects = ({ sites }) => {
    const [pics] = useState([
        {
            name: "",
            github: "",
            deployed: "",
        },
    ])

    const recentSites = pics.filter(pic => pic.sites === sites);
        return(
            <div className="project-container">
                <h1 className="project-header">My Projects</h1>
            {recentSites.map((image, i) => (
                <div key={image.name} className ="project-div">
                    <h2 className="pic-name">{image.name}</h2>
                
                </div>
            ))}
            </div>
        )
    }

export default Projects