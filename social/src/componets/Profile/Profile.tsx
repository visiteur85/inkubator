import React from 'react';
import s from "./profile.module.css"
import {MyPosts} from "./My posts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {} from "../../App";
// import {ActionsType, ProfilePageType} from "../../Redux/store";
import {Dispatch} from "redux";
import {ProfilePageType} from "../../Redux/profile-reducer";
import {MyPostsContainer} from "./My posts/MyPostsContainer";
import {RootStateType} from "../../Redux/store";


type PropsType = {
    profilePage: ProfilePageType
    dispatch: Dispatch
    // store: RootStateType
}

export const Profile = (props: PropsType) => {


    return (
        <div>
            <ProfileInfo/>

            <MyPostsContainer
                // store={props.store}
                profilePage={props.profilePage}
                                          dispatch={props.dispatch}
            />
        </div>
    );
};

