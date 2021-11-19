import React from 'react';
import s from "./Post.module.css"


type PostTypeProps = {
    message: string
    likes: number
}

export const Post: React.FC <PostTypeProps> = (props) => {
    return <div className={s.item}>
        <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq7ktobmis68f6L18AowLqKzIAFN-16Je2q5v2fyaeW7e3M9EHZkPDxg9qPIYjpSWW4wE&usqp=CAU"/>
        {props.message}
        <div>
            <span>{props.likes}</span>
        </div>

    </div>


}