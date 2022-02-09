import React from 'react';

import {MyPosts} from "./MyPosts/MyPosts";

import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {} from "../../redux/profile-reducer";
import {ActionsTypes, PostType} from "../../redux/state";
// import{addPost} from "../../redux/state";


type MyPostsPropsType = {
    post: Array<PostType>
       message: string
        dispatch: (action: ActionsTypes)=>void
}


export const Profile = (props: MyPostsPropsType) => {


    return <div>
        <ProfileInfo/>
        <MyPosts post={props.post}
                                message={props.message}
                                 dispatch={props.dispatch}
        />
    </div>

}


