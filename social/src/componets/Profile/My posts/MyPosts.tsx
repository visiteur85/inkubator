import React from 'react';
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";

export const MyPosts = () => {

    let postData = [
        {id: 1, message: "Hi, how are you", likesCount: 0},
        {id: 2, message: "it's my first post", likesCount: 23}
    ]
    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>ADD post</button>
                </div>

            </div>
            <div className={s.posts}>
                {postData.map((post, index) => <Post key={index} message={post.message} likesCount={post.likesCount}/>)}

            </div>
        </div>

    );
};


