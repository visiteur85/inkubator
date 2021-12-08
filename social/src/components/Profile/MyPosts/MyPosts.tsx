import React from 'react';
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";

type MyPostsPropsType = {
    post: Array<postMyPostsPropsType>
}

type postMyPostsPropsType = {
    id: number
    message: string
    likesCount: number
}

export const MyPosts = (props: MyPostsPropsType) => {


    let postElements = props.post.map(p => <Post message={p.message} likes={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const addNewPost = () => {
        let text = newPostElement.current?.value;
        alert("Hsdaf")
    };

    return <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea ref={newPostElement}></textarea>
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