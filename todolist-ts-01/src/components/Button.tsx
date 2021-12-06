import React from "react";

type propsType={
    nameButton: string
    callBack:()=>void
}

export const Button = (props: propsType) => {

    const onclickHandler = () => {
props.callBack()
    }


    return (<button onClick={onclickHandler}>
        {props.nameButton}
    </button>)

}