import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {RootReducerType} from "../../Redux/redux-store";
import {Logout} from "../../Redux/auth-reducer";


type PropsType = MapStateToPropsType & MapDispatchToPropsType

export class HeaderAPIContainer extends React.Component<PropsType> {

    // componentDidMount() {
    //     this.props.getMeThunkCreator()
    // }

    render() {
        return <Header isAuth={this.props.isAuth}
                       login={this.props.login}
                       Logout={this.props.Logout}
        />
    }
}

type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
};
type MapDispatchToPropsType = {
    Logout:()=>void

}


const mapStateToProps = (state: RootReducerType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})


export const HeaderContainer = connect<MapStateToPropsType, MapDispatchToPropsType, unknown, RootReducerType>(mapStateToProps, { Logout})(HeaderAPIContainer);

