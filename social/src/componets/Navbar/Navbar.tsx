import React from 'react';
import s from "./navbar.module.css"
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (

        <nav className={s.nav}>
                        <div ><NavLink to="/profile" activeClassName={s.active} className={s.item} >Profile</NavLink></div>
            <div className={s.item}><NavLink to="/dialogs" activeClassName={s.active} className={s.item}>Messages</NavLink></div>
            <div><NavLink to="/users" activeClassName={s.active} className={s.item}>Friends</NavLink></div>
            <div><NavLink to="/news" className={s.item} >News</NavLink></div>
            <div><NavLink to="/music" className={s.item} >Music</NavLink></div>
            <div><NavLink to="/settings" className={s.item} >Settings</NavLink></div>
        </nav>

    );
};