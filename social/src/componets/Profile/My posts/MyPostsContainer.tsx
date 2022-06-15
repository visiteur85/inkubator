// import React from 'react';

// import {} from "../../../App";


import {addPost, PostPropsType} from '../../../Redux/profile-reducer';
import {MyPosts} from "./MyPosts";

import {RootReducerType} from "../../../Redux/redux-store";


import {connect} from "react-redux";




 type MapStateToPropsType = {

     posts:PostPropsType[]
};

export type MapDispatchToPropsType = {

    addPost:(newPostText:string)=>void
};

export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType


const mapStateToProps = (state: RootReducerType): MapStateToPropsType => {
    return {

        posts:state.profilePage.posts
    }
};


export const MyPostsContainer = connect(mapStateToProps,
    { addPost}
    )(MyPosts);