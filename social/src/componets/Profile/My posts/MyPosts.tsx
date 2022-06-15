import React, {LegacyRef} from 'react';
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {} from "../../../App";


import {MyPostsPropsType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Login} from "../../Login/Login";





export const MyPosts = (props: MyPostsPropsType) => {

    const onAddPost = (formData:FormPostDataType) => {
                   props.addPost(formData.newPostText)

        }

      return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <AddNewpostReduxForm onSubmit={onAddPost}/>
            <div className={s.posts}>
                {props.posts.map((post, index) =>
                    <Post key={index} message={post.message}
                          likesCount={post.likesCount}/>)}
            </div>
        </div>
    );
};

type FormPostDataType = {
    newPostText: string

}

export const AddNewPostForm: React.FC<InjectedFormProps<FormPostDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                    <Field component={"textarea"} name={"newPostName"}
                       />
            </div>
            <div>
                <button >Add post</button>
            </div>

        </form>
    )

}

const AddNewpostReduxForm = reduxForm<FormPostDataType>({
    form: "ProfileAddNewPostForm"
})(AddNewPostForm)