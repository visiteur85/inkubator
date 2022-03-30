import React from 'react';
import s from "./profile.module.css"
import {MyPosts} from "./My posts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {} from "../../App";
import {PostsPropsType} from "../../index";

type PropsType = {
    posts:PostsPropsType
}

export const Profile = (props:PropsType) => {


    return (
        <div>
            <ProfileInfo />

            <MyPosts posts={props.posts}/>
        </div>
    );
};

