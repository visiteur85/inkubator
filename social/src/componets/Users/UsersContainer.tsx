import {connect} from "react-redux";


import {RootReducerType} from "../../Redux/redux-store";
import {
     followThunkCreator, getUsersThunkCreator,
    OneUserType,
    setCurrentPage,
    toggleFollowingProgress,
   unFollowThunkCreator
} from "../../Redux/users-reducer";

import React from "react";

import {Users} from "./Users";

import {Preloader} from "../common/preloader/Preloader";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";


type PropsType = {
    items: Array<OneUserType>
    setCurrentPage: (currentPage: number) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    getUsersThunkCreator: (currentPage: number, pageSize: number) => void
    unFollowThunkCreator: (userId: number) => void
    followThunkCreator: (userId: number) => void

    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
};

export class UsersApiComponent extends React.Component<PropsType> {

    componentDidMount() {

        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }

    onChangedPage = (page: number) => {
        this.props.getUsersThunkCreator(page, this.props.pageSize)

    }

    render() {
        return <>
            {this.props.isFetching ?
                <Preloader/>
                : null}
            <Users
                totalCount={this.props.totalCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onChangedPage={this.onChangedPage}
                items={this.props.items}
                toggleFollowingProgress={this.props.toggleFollowingProgress}
                followingInProgress={this.props.followingInProgress}
                followThunkCreator={this.props.followThunkCreator}
                unFollowThunkCreator={this.props.unFollowThunkCreator}
            />
        </>


    }
}

type MapStateToPropsType = {
    items: Array<OneUserType>
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
};



const mapStateToProps = (state: RootReducerType): MapStateToPropsType => {
    return {
        items: state.usersPage.items,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    };
};

let withRedirect = WithAuthRedirect(UsersApiComponent)
export const UsersContainer = connect(
    mapStateToProps,
    {
        setCurrentPage,
        toggleFollowingProgress,
        getUsersThunkCreator, followThunkCreator, unFollowThunkCreator
    }
)(withRedirect);
