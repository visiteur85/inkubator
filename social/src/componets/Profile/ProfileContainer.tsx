import React from "react";

import {} from "../../App";

import {Profile} from "./Profile";

import {connect} from "react-redux";
import {RootReducerType} from "../../Redux/redux-store";
import {getProfileThunkCreator, ProfileFromServerType} from "../../Redux/profile-reducer";


import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";


type PathParamsType = {
    //разобраться строка или число
    userId: any
}

type CommonPropsType = RouteComponentProps<PathParamsType> & PropsType


type PropsType = {

    profile: ProfileFromServerType | null
    getProfileThunkCreator: (userId: number) => void
    isAuth:boolean
};

export class ProfileAPIContainer extends React.Component<CommonPropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2
        }

        this.props.getProfileThunkCreator(userId)

    }

    render() {
        if (!this.props.isAuth ) return <Redirect to={"/login"}/>
        return (
            <Profile profile={this.props.profile}

            />
        );
    }
};

type MapStateToPropsType = {
    profile: ProfileFromServerType | null
    isAuth:boolean

};

let mapStateToProps = (state: RootReducerType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        isAuth:state.auth.isAuth
    }
}


let WithUrlDataContainer = withRouter(ProfileAPIContainer);

export const ProfileContainer = connect(mapStateToProps, {getProfileThunkCreator})(WithUrlDataContainer)