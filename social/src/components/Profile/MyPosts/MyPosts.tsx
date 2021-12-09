import React from 'react';
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {addPost, PostType} from "../../../redux/state";
import {addPostPropsType} from "../../../redux/state";

type MyPostsPropsType = {
    post: Array<PostType>
    addPostCallBack: (postText:string)=>void
}

// type postMyPostsPropsType = {
//     id: number
//     message: string
//     likesCount: number
// }

export const MyPosts = (props: MyPostsPropsType) => {


    let postElements = props.post.map(p => <Post message={p.message} likes={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();



const addNewPost = () => {
if (newPostElement.current) {
    props.addPostCallBack(newPostElement.current ? newPostElement.current.value: "...")
newPostElement.current.value = " "
}

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