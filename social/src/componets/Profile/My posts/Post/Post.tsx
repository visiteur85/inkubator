import React from 'react';
import s from "./MyPost.module.css"

type PropsType = {
    message: string
    likesCount:number
}


export const Post = (props:PropsType) => {


    return (

        <div className={s.item}>
            <img src="https://cdn-st1.rtr-vesti.ru/vh/pictures/xw/319/179/6.jpg" alt=""/>
            {props.message}
            <div>
                <span>likes {props.likesCount}</span>
            </div>
        </div>


    );
};

