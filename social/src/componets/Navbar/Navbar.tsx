import React from 'react';
import s from "./navbar.module.css"
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (

        <nav className={s.nav}>
            <div><NavLink to="/profile" className={({isActive})=>isActive ? s.active : s.item}>Profile</NavLink></div>
            <div><NavLink to="/dialogs" className={({isActive})=>isActive ? s.active : s.item}>Messages</NavLink></div>
            <div><NavLink to="/users" className={({isActive})=>isActive ? s.active : s.item}>Friends</NavLink></div>
            <div><NavLink to="/news" className={s.item} >News</NavLink></div>
            <div><NavLink to="/music" className={s.item} >Music</NavLink></div>
            <div><NavLink to="/settings" className={s.item} >Settings</NavLink></div>
        </nav>

    );
};