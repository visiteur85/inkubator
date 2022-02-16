import React from 'react';

import {MyPosts} from "./MyPosts/MyPosts";

import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, PostType} from "../../redux/profile-reducer";
import {} from "../../redux/redux-store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {AppStoreType} from "../../redux/redux-store";
// import{addPost} from "../../redux/state";


// type MyPostsPropsType = {
//     post: Array<PostType>
//        message: string
//         dispatch: (action: ActionsTypes)=>void
//     store: AppStoreType
// }
//props: MyPostsPropsType

export const Profile = () => {


    return <div>
        <ProfileInfo/>
        {/*<MyPosts post={props.post}*/}
        {/*                        message={props.message}*/}
        {/*                         dispatch={props.dispatch}*/}
        {/*/>*/}
        <MyPostsContainer
            // store={props.store}
            // post={props.post}
            //                     message={props.message}
            //                     dispatch={props.dispatch}
        />
    </div>

}


