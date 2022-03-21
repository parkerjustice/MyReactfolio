import React, { useState } from 'react';



const Projects = ({ sites }) => {

        return(
            <div className="projectContainer">
                <h1 className="projectHeader">My Projects</h1>
                <h1 className='repoclass'>
                <a href="https://austingilmora.github.io/what-breed-do-you-need/">
                    <button>What Breed Do You Need</button>
                </a>
                <a href="https://parkerjustice.github.io/WebAPI-Coding-Quiz2/">
                    <button>Coding Quiz</button>
                </a>
                <a href="https://parkerjustice.github.io/work-day-scheduler/">
                    <button>Work Day Scheduler</button>
                </a>
                </h1>
                </div>
                
        )
        
    }

export default Projects;