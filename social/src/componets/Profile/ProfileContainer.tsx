import React from "react";

import {} from "../../App";

import {Profile} from "./Profile";

import {connect} from "react-redux";
import {RootReducerType} from "../../Redux/redux-store";
import {
    getProfileThunkCreator,
    getUserStatusThunkCreator,
    ProfileFromServerType,
    updateStatusThunkCreator
} from "../../Redux/profile-reducer";


import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";


type PathParamsType = {
    //разобраться строка или число
    userId: any
}

type CommonPropsType = RouteComponentProps<PathParamsType> & PropsType


type PropsType = {

    profile: ProfileFromServerType | null
    getProfileThunkCreator: (userId: number) => void
    getUserStatusThunkCreator:(userId: number) => void
    isAuth: boolean
    status:string
    updateStatusThunkCreator:(status:string) => void
};

export class ProfileAPIContainer extends React.Component<CommonPropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2
        }
        this.props.getProfileThunkCreator(userId);

        this.props.getUserStatusThunkCreator(userId);

    }

    render() {

        return (
            <Profile profile={this.props.profile} status={this.props.status}
updateStatus={this.props.updateStatusThunkCreator}
            />
        );
    }
};

let AuthRedirectComponent = WithAuthRedirect(ProfileAPIContainer);


type MapStateToPropsType = {
    profile: ProfileFromServerType | null
    status:string
};


let mapStateToProps = (state: RootReducerType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status:state.profilePage.status
    }
}


// let WithUrlDataContainer = withRouter(AuthRedirectComponent);
//
// // export const ProfileContainer = connect(mapStateToProps, {getProfileThunkCreator})(WithUrlDataContainer)

export const ProfileContainer = compose<React.ComponentType>(
    connect(mapStateToProps, {getProfileThunkCreator,updateStatusThunkCreator, getUserStatusThunkCreator}),
    withRouter,)
(AuthRedirectComponent)
