import React from 'react';
import s from "./profile.module.css"
import {MyPosts} from "./My posts/MyPosts";

export const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img
                    src="https://ichef.bbci.co.uk/news/640/cpsprodpb/FE55/production/_105090156_gettyimages-836351108.jpg"
                    alt="space"/>
            </div>
            <div>ava+description</div>
            <MyPosts/>
        </div>
    );
};

