import React from 'react';
import s from "./profile.module.css"
import {MyPosts} from "./My posts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {} from "../../App";
// import {ActionsType, ProfilePageType} from "../../Redux/store";
import {Dispatch} from "redux";
import {ProfilePageType} from "../../Redux/profile-reducer";


type PropsType = {
    profilePage: ProfilePageType
    dispatch: Dispatch
}

export const Profile = (props: PropsType) => {


    return (
        <div>
            <ProfileInfo/>

            <MyPosts profilePage={props.profilePage}
                                          dispatch={props.dispatch}
            />
        </div>
    );
};

