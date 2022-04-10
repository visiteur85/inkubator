import React from 'react';
import s from "./profile.module.css"
import {MyPosts} from "./My posts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {} from "../../App";
import {ActionsType, ProfilePageType} from "../../Redux/state";


type PropsType = {
    profilePage: ProfilePageType
    dispatch:(action:ActionsType)=>void


}

export const Profile = (props: PropsType) => {


    return (
        <div>
            <ProfileInfo/>

            <MyPosts posts={props.profilePage}
                                          dispatch={props.dispatch}
            />
        </div>
    );
};

