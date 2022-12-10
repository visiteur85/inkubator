import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {} from "../../App";


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


