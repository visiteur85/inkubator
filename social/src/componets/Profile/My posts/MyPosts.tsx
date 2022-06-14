import React, {LegacyRef} from 'react';
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {} from "../../../App";


import {MyPostsPropsType} from "./MyPostsContainer";
import {Field, reduxForm} from "redux-form";
import {LoginForm} from "../../Login/Login";




export const MyPosts = (props: MyPostsPropsType) => {


    const onAddPost = (values:any) => {

                   props.addPost(values.newPostName)

        }
    };
      return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <AddnewpostReduxForm onSubmit={onAddPost}/>
            <div className={s.posts}>
                {props.posts.map((post, index) =>
                    <Post key={index} message={post.message}
                          likesCount={post.likesCount}/>)}

            </div>
        </div>

    );
};

export const AddNewPostForm = () => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                    <Field name={"newPostName"}
                       />
                {/*value={props.profilePage.newPostText}/>*/}
            </div>
            <div>
                <button >Add post</button>
            </div>

        </form>
    )

}

const AddnewpostReduxForm = reduxForm<FormDataType>({
    form: "ProfileAddNewPostForm"
})(AddNewPostForm)