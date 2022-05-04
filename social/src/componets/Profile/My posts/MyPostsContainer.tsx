import React, {LegacyRef} from 'react';

import {} from "../../../App";


import {addPost, PostPropsType, updateNewPostText} from '../../../Redux/profile-reducer';
import {MyPosts} from "./MyPosts";

import {RootReducerType} from "../../../Redux/redux-store";


import {connect} from "react-redux";




 type MapStateToPropsType = {
     newPostText:string
     posts:PostPropsType[]
};

export type MapDispatchToPropsType = {
    updateNewPostText:(text:string)=>void
    addPost:()=>void
};

export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType


const mapStateToProps = (state: RootReducerType): MapStateToPropsType => {
    return {
        newPostText:state.profilePage.newPostText,
        posts:state.profilePage.posts
    }
};


export const MyPostsContainer = connect(mapStateToProps,
    {updateNewPostText, addPost}
    )(MyPosts);