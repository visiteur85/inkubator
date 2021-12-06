import React from 'react';

import {MyPosts} from "./MyPosts/MyPosts";

import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
type MyPostsPropsType = {
    post: Array<postMyPostsPropsType>
}

type postMyPostsPropsType = {
    id: number
    message: string
    likesCount: number
}
export const Profile = (props: MyPostsPropsType) => {


    return <div>
        <ProfileInfo/>
        <MyPosts post={props.post}/>
    </div>

}


