import React from 'react';
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>
            My Posts
            <div>
                <textarea></textarea>
                <button>ADD post</button>

            </div>
            <div className={s.posts}>
                <Post message={"Hi, how are you"}/>
                <Post message={"it's my first post"}/>
            </div>
        </div>

    );
};


