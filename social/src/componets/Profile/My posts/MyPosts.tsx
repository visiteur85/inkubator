import React from 'react';
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {} from "../../../App";
import {PostsPropsType} from "../../../index";

type PropsType = {
    posts:PostsPropsType
}


export const MyPosts = (props:PropsType) => {

    // let posts = [
    //     {id: 1, message: "Hi, how are you", likesCount: 0},
    //     {id: 2, message: "it's my first post", likesCount: 23},
    //     {id: 2, message: "I m ok", likesCount: 14},
    //     {id: 2, message: "Great", likesCount: 43},
    // ]
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
                {props.posts.map((post, index) => <Post key={index} message={post.message} likesCount={post.likesCount}/>)}

            </div>
        </div>

    );
};


