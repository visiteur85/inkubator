import React, {LegacyRef} from 'react';
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {} from "../../../App";
import {ActionsType, ProfilePageType} from "../../../Redux/state";


type PropsType = {
    posts: ProfilePageType

    dispatch:(action:ActionsType)=>void

}


export const MyPosts = (props: PropsType) => {


    let newPostElement = React.createRef<HTMLTextAreaElement>();
    const addPost = () => {

        if (newPostElement.current) {
            let text = newPostElement.current.value;
            props.dispatch({type:"ADD-POST"})
        }
    }

    const onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value;

            props.dispatch({type: "UPDATE-NEW-POST", newText:text});
        }
    }


    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}
                              onChange={onPostChange}
                              value={props.posts.newPostText}/>
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


