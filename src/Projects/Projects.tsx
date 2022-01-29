import React from 'react';
import s from './Projects.module.css'

export const Projects = () => {
    return (
        <div className={s.skills}>
            <div className={s.skillsContainer}>
                <h3>My projects</h3>
            </div>
            <div className={s.skillsText}>Todolist App</div>
            <div className={s.skillsText}>Social Network</div>
            <div className={s.skillsText}>Counter</div>
        </div>
    )
}