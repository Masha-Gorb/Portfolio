import React from 'react';
import s from './Main.module.css'

export const Main = () => {
    return (
        <div className={s.main}>
            <p className={s.mainText}>Hello! My name is Barsuk, I'm frontend developer from Nora.</p>
            <img className={s.mainAvatar} src='https://images.wbstatic.net/wbkids/24229/a1bb17d9-6841-4809-816e-1753517efeba.jpg'/>
        </div>
    )
}