import React, {ChangeEvent} from 'react';
 import {Post} from "./Post/Post";
import {} from "../../../redux/dialog-reducer";
import {} from "../../../redux/redux-store";
import {ActionsTypes, addPostAC, PostType} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {AppStoreType} from "../../../redux/redux-store";


type MyPostsPropsType = {
    post: Array<PostType>
    message: string
    dispatch: (action: ActionsTypes) => void
    store: AppStoreType

}

export const MyPostsContainer = (props: MyPostsPropsType) => {

    let postElements = props.post.map(p => <Post message={p.message} likes={p.likesCount}/>)

    const addNewPost = () => {
        props.store.dispatch(addPostAC(props.message));
    }

    const newTextChangeHandler = (text: string) => {
        props.store.dispatch({type: "CHANGE-NEW-TEXT", newText: text})
    }

    return (<MyPosts updateNewPostText={newTextChangeHandler}
                     post={props.post}
                     message={props.message}
                     dispatch={props.dispatch}
                     addNewPost={addNewPost}/>)


}