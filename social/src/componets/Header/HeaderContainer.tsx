import React from 'react';
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {RootReducerType} from "../../Redux/redux-store";
import {getMeThunkCreator} from "../../Redux/auth-reducer";


type PropsType = MapStateToPropsType & MapDispatchToPropsType

export class HeaderAPIContainer extends React.Component<PropsType> {

    componentDidMount() {
        this.props.getMeThunkCreator()
    }

    render() {
        return <Header isAuth={this.props.isAuth}
                       login={this.props.login}
        />
    }
};

type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
};
type MapDispatchToPropsType = {

    getMeThunkCreator:()=>void
}


const mapStateToProps = (state: RootReducerType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})


export const HeaderContainer = connect<MapStateToPropsType, MapDispatchToPropsType, unknown, RootReducerType>(mapStateToProps, {getMeThunkCreator})(HeaderAPIContainer);

