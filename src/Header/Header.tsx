import React from 'react';
import s from './Header.module.css'
import {Nav} from "../Nav/Nav";


export const Header = () => {
    return (
        <div className={s.header}>
            <h1 className={s.headerText}>Welcome to my crib</h1>
            <Nav/>
        </div>
    )
}