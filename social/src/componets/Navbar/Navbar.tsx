import React from 'react';
import s from "./navbar.module.css"

export const Navbar = () => {
    return (

        <nav className={s.nav}>
            <div><a href="/profile" className={`${s.item} ${s.active}`}>Profile</a></div>
            <div><a href="/dialogs" className={s.item}>Messages</a></div>
            <div><a href="/news" className={s.item} >News</a></div>
            <div><a href="/music" className={s.item} >Music</a></div>
            <div><a href="/settings" className={s.item} >Settings</a></div>
        </nav>

    );
};