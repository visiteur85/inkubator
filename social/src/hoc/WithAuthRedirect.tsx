import React, {ComponentType} from 'react';
import {Redirect} from "react-router-dom";
import {RootReducerType} from "../Redux/redux-store";
import {connect} from "react-redux";

export type  mapStateToPropsRedirectType = {
    isAuth: boolean
}

export let mapStateToPropsRedirect = (state: RootReducerType): mapStateToPropsRedirectType => ({

        isAuth: state.auth.isAuth
    });


export function WithAuthRedirect  <T>(Component: ComponentType<T>)  {
    function RedirectComponent(props: mapStateToPropsRedirectType) {

        let {isAuth, ...restProps} = props

        if (!isAuth) return <Redirect to={"/login"}/>
        return <Component {...restProps as T}/>
    }


    let  ConnectedAuthRedirectComponent = connect(mapStateToPropsRedirect) (RedirectComponent)
    return ConnectedAuthRedirectComponent
}



