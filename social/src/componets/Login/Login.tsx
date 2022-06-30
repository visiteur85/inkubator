import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControl/FormControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {LoginTS} from "../../Redux/auth-reducer";
import {compose} from "redux";
import {getProfileThunkCreator, getUserStatusThunkCreator, updateStatusThunkCreator} from "../../Redux/profile-reducer";
import {withRouter} from "react-router-dom";

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean

}

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (

        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"}
                       name={"login"}
                       validate={[required]}
                       component={Input}/>
            </div>
            <div>
                <Field placeholder={"Password"}
                       name={"password"}
                       validate={[required]}
                       component={Input}/>
            </div>
            <div>
                <Field component={Input} name={"rememberMe"} type={"checkbox"}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>


    );
};

const LoginReduxForm = reduxForm<FormDataType>({
    form: "login"
})(LoginForm)

export type LoginPropsType = {
    LoginTS:(email: string, password: string, rememberMe: boolean)=>void
}
 export const Login = (props:LoginPropsType) => {

    const onSubmit = (formData: FormDataType) => {
     props.LoginTS(formData.login, formData.password, formData.rememberMe)
    }
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>


    );
};

export default  connect(null, {LoginTS}) (Login)

export const LoginContainer = compose<React.ComponentType>(
    connect(null, {LoginTS}),
    withRouter,)
(Login)