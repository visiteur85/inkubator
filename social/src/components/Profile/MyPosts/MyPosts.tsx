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

    return <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </div>
        <div className={s.posts}>
            {postElements}
        </div>
    </div>


}