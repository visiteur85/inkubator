import React, {LegacyRef} from 'react';
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {} from "../../../App";


import {addPostActionCreator, PostPropsType, updateNewPostAC} from '../../../Redux/profile-reducer';
import {MyPosts} from "./MyPosts";

import {RootReducerType} from "../../../Redux/redux-store";
import {Dispatch} from "redux";

import {connect} from "react-redux";




 type MapStateToPropsType = {
     newPostText:string
     posts:PostPropsType[]
}

export type MapDispatchToPropsType = {
    updateNewPostText:(text:string)=>void
    addPost:()=>void
}

export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType


const mapStateToProps = (state: RootReducerType): MapStateToPropsType => {
    return {
        newPostText:state.profilePage.newPostText,
        posts:state.profilePage.posts
    }
};

const mapDispatchToProps = (dispatch:Dispatch): MapDispatchToPropsType => {
    return {
        updateNewPostText: (text:string)=>{
            dispatch(updateNewPostAC(text))
        },
        addPost:()=>{
            dispatch(addPostActionCreator())}
    }
};
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);