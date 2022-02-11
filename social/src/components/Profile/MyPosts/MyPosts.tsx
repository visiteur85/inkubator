import React, {ChangeEvent} from 'react';
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {} from "../../../redux/dialog-reducer";
import {type} from "os";
import {ActionsTypes, PostType} from "../../../redux/store";
import {addPostAC} from "../../../redux/profile-reducer";


type MyPostsPropsType = {
    post: Array<PostType>
    message: string
    dispatch: (action: ActionsTypes) => void
    updateNewPostText:(text:string)=>void
    addNewPost:()=>void



}

export const MyPosts = (props: MyPostsPropsType) => {

    let postElements = props.post.map(p => <Post message={p.message} likes={p.likesCount}/>)


    const addNewPost = () => {
props.addNewPost();
        // props.dispatch(addPostAC(props.message));


    }

    const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
 let text = e.currentTarget.value;
 props.updateNewPostText(text)

        // props.dispatch({type: "CHANGE-NEW-TEXT", newText: e.currentTarget.value})
    }


    return <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea
                    value={props.message}
                    onChange={newTextChangeHandler}
                    onKeyPress={(e) => {
                        if (e.key === "Enter") {
                            addNewPost()
                        }
                    }}
                />
            </div>
            <div>
                <button onClick={addNewPost}>Add post</button>
            </div>
        </div>
        <div className={s.posts}>
            {postElements}
        </div>
    </div>


}