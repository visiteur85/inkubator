import React from 'react';
import s from "./profile.module.css"

export const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img
                    src="https://ichef.bbci.co.uk/news/640/cpsprodpb/FE55/production/_105090156_gettyimages-836351108.jpg"
                    alt="space"/>
            </div>
            <div>ava+description</div>
            <div>My Posts
                <div>New Post</div>
                <div className={s.posts}>
                    <div className={s.item}>post1</div>
                    <div className={s.item}>post2</div>
                </div>
            </div>
        </div>
    );
};

