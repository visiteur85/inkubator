import React from 'react';
import  s from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return <div>
        <div>
            <img src="https://media.istockphoto.com/photos/eiffel-tower-in-paris-skyline-at-dawn-picture-id1280246120?b=1&k=20&m=1280246120&s=170667a&w=0&h=9g8hb-FTp7TfrN6gItpxDFKG0wPjwvnZQlNHZaxyeeI="/>
        </div>
        <div>ava description</div>
<MyPosts/>
        </div>

}


