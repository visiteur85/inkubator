import React, {ChangeEvent} from 'react';
import {Post} from "./Post/Post";
import {} from "../../../redux/dialog-reducer";
import {AppStateType, store} from "../../../redux/redux-store";
import {ActionsTypes, addPostAC, ChangeNewTextAC, PostType, profilePageType} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {AppStoreType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {Dialogs} from "../../Dialogs/Dialogs";
import {Profile} from "../Profile";
import {Dispatch} from "redux";



// type MyPostsPropsType = {
//     post: Array<PostType>
//     message: string
//     dispatch: (action: ActionsTypes) => void
//     store: AppStoreType
//
// }
//props: MyPostsPropsType


type MapStateToPropsType = {
    post: Array<PostType>
    messageForNewPost: string
}

type mapDispatchToPropsType = {
    addNewPost:(postText: string)=>void
    updateNewPostText:(newText: string)=>void

}


const mapStateToProps = (state:AppStateType):MapStateToPropsType => {
    return {
        post:state.profilePage.post,
        messageForNewPost:state.profilePage.messageForNewPost
    }
}

const mapDispatchToProps = (dispatch:Dispatch) => {
    return {
        addNewPost:(postText: string) => {
            dispatch(addPostAC(postText))
        },
        updateNewPostText:(newText: string)=> {
            dispatch(ChangeNewTextAC(newText))
        }

    }

}
export const MyPostsContainer = connect<MapStateToPropsType, mapDispatchToPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(MyPosts);