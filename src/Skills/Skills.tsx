import React from 'react';
import s from './Skills.module.css'

export const Skills = () => {
    return (
        <div className={s.skills}>
            <div className={s.skillsContainer}>
                <h3>My skills</h3>
            </div>
            <div className={s.skillsText}>JS</div>
            <div className={s.skillsText}>React</div>
            <div className={s.skillsText}>Redux</div>
        </div>
    )
}