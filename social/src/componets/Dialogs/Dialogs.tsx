import React from "react";
import s from "./Dialogs.module.css";
import {NavLink, Redirect} from "react-router-dom";

import {DialogsPropsType,} from "./DialogsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";


export const Dialogs = (props: DialogsPropsType) => {


    let dialogsElements = props.dialogs.map((dialog, index) => (
        <DialogItem key={index} name={dialog.name} id={dialog.id}/>
    ));

    let messageElements = props.messages.map((message, index) => (
        <Message key={index} message={message.message}/>
    ));


    const addNewMessage = (value:string) => {
        props.sendMessageBody(value)
    };


    const onSubmit = (formData: FormDataMessageType) => {
        console.log(formData)
    }
    // if (!props.isAuth) return <Redirect to={"./login"}/>
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>{dialogsElements}</div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                <AddMessageFormRedux onSubmit={onSubmit}/>
            </div>

        </div>
    );
};
type FormDataMessageType = {
    newMessageBody: any

}
const AddMessageForm: React.FC<InjectedFormProps<FormDataMessageType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={"textarea"} name={"newMessageBody"} placeholder={"Введите Ваше сообщение"}/>

            </div>
            <div>
                <button>
                    Send
                </button>
            </div>
        </form>)
}

const AddMessageFormRedux = reduxForm<FormDataMessageType>({form: "DialogAddMessageForm"})(AddMessageForm)
export type DialogItemPropsType = {
    name: string;
    id: number;
};

export const DialogItem = (props: DialogItemPropsType) => {
    return (
        <div className={s.dialog}>
            <NavLink className={s.Navlink} to={"/dialogs/" + props.id}>
                {props.name}
            </NavLink>
        </div>
    );
};

export type MessagePropsType = {
    message: string;
};
export const Message = (props: MessagePropsType) => {
    return <div className={s.message}>{props.message}</div>;
};
