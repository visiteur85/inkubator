import React from 'react';
import s from "./MyPost.module.css"

type PropsType = {
    message: string
    likesCount:number
}


export const Post = (props:PropsType) => {


    return (

        <div className={s.item}>
            <img src="https://cdnimg.rg.ru/i/gallery/84f24d10/19_b6265e7a.jpg" alt=""/>
            {props.message}
            <div>
                <span>likes {props.likesCount}</span>
            </div>
        </div>


    );
};

