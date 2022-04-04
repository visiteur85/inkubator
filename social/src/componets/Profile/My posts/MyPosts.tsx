import React, {LegacyRef} from 'react';
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {} from "../../../App";
import {ProfilePageType} from "../../../Redux/state";


type PropsType = {
    posts: ProfilePageType
    addPost: (postMessage: string) => void
}


export const MyPosts = (props: PropsType) => {


    let newPostElement = React.createRef<HTMLTextAreaElement>();
    const addPost = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value;
            props.addPost(text)
            newPostElement.current.value = ""
        }
    }


    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>ADD post</button>
                </div>

            </div>
            <div className={s.posts}>
                {props.posts.posts.map((post, index) =>
                    <Post key={index} message={post.message}
                          likesCount={post.likesCount}/>)}

            </div>
        </div>

    );
};


