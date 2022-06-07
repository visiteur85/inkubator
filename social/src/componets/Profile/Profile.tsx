import React from "react";
import s from "./profile.module.css";
import {MyPosts} from "./My posts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {} from "../../App";
// import {ActionsType, ProfilePageType} from "../../Redux/store";


import {MyPostsContainer} from "./My posts/MyPostsContainer";
import {ProfileFromServerType} from "../../Redux/profile-reducer";

type PropsType = {
    profile: ProfileFromServerType | null
    status: string
    updateStatus: (status: string) => void

    //
};

export const Profile = (props: PropsType) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>
    );
};


