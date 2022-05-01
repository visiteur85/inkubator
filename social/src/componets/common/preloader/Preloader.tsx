import React from 'react';
import preloader from "../../../images/Spinner-1s-200px.gif";

type PropsType = {

}
export const Preloader = (props:PropsType) => {
    return (
        <img src={preloader}/>
    );
};
