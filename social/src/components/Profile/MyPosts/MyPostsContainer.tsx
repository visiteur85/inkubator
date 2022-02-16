import React, {ChangeEvent} from 'react';
import {Post} from "./Post/Post";
import {} from "../../../redux/dialog-reducer";
import {store} from "../../../redux/redux-store";
import {ActionsTypes, addPostAC, PostType} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {AppStoreType} from "../../../redux/redux-store";
import {StoreContext} from "../../../StoreContext";


// type MyPostsPropsType = {
//     post: Array<PostType>
//     message: string
//     dispatch: (action: ActionsTypes) => void
//     store: AppStoreType
//
// }
//props: MyPostsPropsType
export const MyPostsContainer = () => {


    return (
        <StoreContext.Consumer>
            {(store) => {
                const state = store.getState()

                let postElements = state.profilePage.post.map(p => <Post message={p.message} likes={p.likesCount}/>)

                const addNewPost = () => {
                    store.dispatch(addPostAC(state.profilePage.messageForNewPost));
                }

                const newTextChangeHandler = (text: string) => {
                    store.dispatch({type: "CHANGE-NEW-TEXT", newText: text})
                }
                return <MyPosts updateNewPostText={newTextChangeHandler}
                                post={state.profilePage.post}
                                message={state.profilePage.messageForNewPost}
                    // dispatch={props.dispatch}
                                dispatch={store.dispatch}
                                addNewPost={addNewPost}/>
            }
        }</StoreContext.Consumer>
    )


}