import React from 'react';
import s from "./profile.module.css"
import {MyPosts} from "./My posts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {} from "../../App";
import {ProfilePageType} from "../../Redux/state";


type PropsType = {
    posts: ProfilePageType
    addPost:(postMessage: string)=>void
}

export const Profile = (props: PropsType) => {


    return (
        <div>
            <ProfileInfo/>

            <MyPosts posts={props.posts}
            addPost={props.addPost}/>
        </div>
    );
};

