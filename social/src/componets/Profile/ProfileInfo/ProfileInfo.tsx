import React from 'react';
import s from "./profileinfo.module.css"


export const ProfileInfo = () => {
    return (
        <div >
            <div>
                <img
                    src="https://ichef.bbci.co.uk/news/640/cpsprodpb/FE55/production/_105090156_gettyimages-836351108.jpg"
                    alt="space"/>
            </div>
            <div className={s.descriptionBlock}>ava+description</div>
        </div>


    );
};

