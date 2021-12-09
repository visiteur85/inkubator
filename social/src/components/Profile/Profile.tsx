import React from 'react';

import {MyPosts} from "./MyPosts/MyPosts";

import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {postPropsType} from "../../redux/state";
import {addPost} from "../../redux/state";

type MyPostsPropsType = {
    post: Array<postPropsType>
    addPostCallBack: (postText:string)=>void
}

// type postMyPostsPropsType = {
//     id: number
//     message: string
//     likesCount: number
// }
export const Profile = (props: MyPostsPropsType) => {


    return <div>
        <ProfileInfo/>
        <MyPosts post={props.post} addPostCallBack={props.addPostCallBack}/>
    </div>

}


