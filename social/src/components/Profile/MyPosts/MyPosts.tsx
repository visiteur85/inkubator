import React, {ChangeEvent} from 'react';
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/state";


type MyPostsPropsType = {
    post: Array<PostType>
    addPostCallBack: (postText:string)=>void
    message:string
    changeTextCallback: (newText:string)=>void
}

// type postMyPostsPropsType = {
//     id: number
//     message: string
//     likesCount: number
// }

export const MyPosts = (props: MyPostsPropsType) => {


    let postElements = props.post.map(p => <Post message={p.message} likes={p.likesCount}/>)

    // let newPostElement = React.createRef<HTMLTextAreaElement>();



const addNewPost = () => {
props.addPostCallBack(props.message);
    props.changeTextCallback("")
}

const newTextChangeHandler=(e: ChangeEvent<HTMLTextAreaElement> )=>{
    props.changeTextCallback(e.currentTarget.value)
}


    return <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea
                value={props.message}
                onChange={newTextChangeHandler}/>
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