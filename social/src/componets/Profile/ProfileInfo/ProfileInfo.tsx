import React from 'react';
import s from "./profileinfo.module.css"
import {Preloader} from "../../common/preloader/Preloader";
import {ProfileFromServerType} from "../../../Redux/profile-reducer";
import {ProfileStatus} from "./ProfileStatus"


type PropsType = {
    profile:ProfileFromServerType | null
    status:string
    updateStatus:(status:string) => void
}

export const ProfileInfo = (props:PropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div >
            {/*<div>*/}
            {/*    <img*/}
            {/*        src="https://ichef.bbci.co.uk/news/640/cpsprodpb/FE55/production/_105090156_gettyimages-836351108.jpg"*/}
            {/*        alt="space"/>*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.small} alt={"photo"}/>
              <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
            </div>
        </div>


    );
};

