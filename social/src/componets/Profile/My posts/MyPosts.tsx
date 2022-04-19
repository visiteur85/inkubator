import React, {LegacyRef} from 'react';
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {} from "../../../App";


import {MyPostsPropsType} from "./MyPostsContainer";




export const MyPosts = (props: MyPostsPropsType) => {


    let newPostElement = React.createRef<HTMLTextAreaElement>();
    const addPost = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value;
                   props.addPost()

        }
    };

    const onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value;
            props.updateNewPostText(text);

        }
    };


    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}
                              onChange={onPostChange}
                              value={props.newPostText}/>
                    {/*value={props.profilePage.newPostText}/>*/}
                </div>
                <div>
                    <button onClick={addPost}>ADd post</button>
                </div>

            </div>
            <div className={s.posts}>
                {props.posts.map((post, index) =>
                    <Post key={index} message={post.message}
                          likesCount={post.likesCount}/>)}

            </div>
        </div>

    );
};


