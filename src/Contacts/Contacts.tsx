import React from 'react';
import s from './Contacts.module.css'

export const Contacts = () => {
    return (
        <div className={s.contacts}>
            <h3 className={s.contactsContainer}>Contacts</h3>
            <input className={s.contactsText} type='text'/>
            <input className={s.contactsText} type='text'/>
            <button className={s.contactsButton}>Hire me</button>
        </div>
    )
}