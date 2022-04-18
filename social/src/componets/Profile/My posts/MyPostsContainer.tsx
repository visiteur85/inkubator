import React, {LegacyRef} from 'react';
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {} from "../../../App";


import {addPostActionCreator, ProfilePageType, updateNewPostAC} from '../../../Redux/profile-reducer';
import {Dispatch} from "redux";
import {MyPosts} from "./MyPosts";
import {RootStateType} from "../../../Redux/store";


type PropsType = {
    profilePage: ProfilePageType
    // store: RootStateType
    dispatch: Dispatch

};
export const MyPostsContainer = (props: PropsType) => {


    // let newPostElement = React.createRef<HTMLTextAreaElement>();
    const addPost = () => {
        // if (newPostElement.current) {
        //     let text = newPostElement.current.value;
            // props.dispatch({type:"ADD-POST"})
            // props.addPost()
            props.dispatch(addPostActionCreator())

        };


    const onPostChange = (text:string) => {
        // if (newPostElement.current) {

            // props.updateNewPostText(text);
            props.dispatch(updateNewPostAC(text));
        // }
    };


    return (
        <MyPosts  updateNewPostText={onPostChange}
                  addPost={addPost}
                  newPostText={props.profilePage.newPostText}
                  posts={props.profilePage.posts}
        />

    );
};


