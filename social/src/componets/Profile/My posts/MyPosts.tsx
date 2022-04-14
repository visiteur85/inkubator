import React, {LegacyRef} from 'react';
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {} from "../../../App";
import {ActionsType, ProfilePageType} from "../../../Redux/state";
import { addPostActionCreator, updateNewPostAC } from '../../../Redux/profile-reducer';


type PropsType = {
    posts: ProfilePageType

    dispatch:(action:ActionsType)=>void

};
export const MyPosts = (props: PropsType) => {


    let newPostElement = React.createRef<HTMLTextAreaElement>();
    const addPost = () => {

        if (newPostElement.current) {
            let text = newPostElement.current.value;
            // props.dispatch({type:"ADD-POST"})
            props.dispatch(addPostActionCreator())
        }
    };

    const onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value;

            props.dispatch(updateNewPostAC(text));
        }
    };


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
                    <button onClick={addPost}>ADd post</button>
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


