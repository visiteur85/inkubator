import React from "react";
import s from "./profile.module.css";
import { MyPosts } from "./My posts/MyPosts";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import {} from "../../App";
// import {ActionsType, ProfilePageType} from "../../Redux/store";


import { MyPostsContainer } from "./My posts/MyPostsContainer";

type PropsType = {
    profile:any
};

export const Profile = (props: PropsType) => {
  return (
    <div>
      <ProfileInfo profile={props.profile} />
      <MyPostsContainer />
    </div>
  );
};
