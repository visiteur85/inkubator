import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControl/FormControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {LoginTS} from "../../Redux/auth-reducer";
import {compose} from "redux";
import {Redirect, withRouter} from "react-router-dom";
import {RootReducerType} from "../../Redux/redux-store";
import {mapStateToPropsRedirectType} from "../../hoc/WithAuthRedirect";
import style from "../../componets/common/FormsControl/FormControls.module.css"

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
            {props.error &&
            <div className={style.formSummeryError}>{props.error}</div>}

            <div>
                <button>Login</button>
            </div>
        </form>


    );
};

const LoginReduxForm = reduxForm<FormDataType>({
    form: "login"
})(LoginForm)

let mapStateToPropsRedirect = (state: RootReducerType): mapStateToPropsRedirectType => ({

    isAuth: state.auth.isAuth
});
export type LoginPropsType = {
    LoginTS: (email: string, password: string, rememberMe: boolean) => void
    isAuth: boolean
}
export const Login = (props: LoginPropsType) => {

    const onSubmit = (formData: FormDataType) => {
        props.LoginTS(formData.login, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>


    );
};

// export default  connect(null, {LoginTS}) (Login)

export const LoginContainer = compose<React.ComponentType>(
    connect(mapStateToPropsRedirect, {LoginTS}),
    withRouter,)
(Login)

