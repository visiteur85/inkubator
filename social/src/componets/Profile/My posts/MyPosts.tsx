import React from 'react';
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form"
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControl/FormControls";


export const MyPosts = (props: MyPostsPropsType) => {

    const onAddPost = (formData: FormPostDataType) => {
        console.log(formData.newPostText)
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
let maxLength10 = maxLengthCreator(10)
export const AddNewPostForm: React.FC<InjectedFormProps<FormPostDataType>> = (props) => {


    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={"newPostText"} placeholder={"Post Message"}
                       validate={[required, maxLength10]}
                />
            </div>
            <div>
                <button type={'submit'}>Add post</button>
            </div>

        </form>
    )

}

const AddNewpostReduxForm = reduxForm<FormPostDataType>({
    form: "ProfileAddNewPostForm"
})(AddNewPostForm)