import {connect} from "react-redux";


import {RootReducerType} from "../../Redux/redux-store";
import {
    follow, followThunkCreator, getUsersThunkCreator,
    OneUserType,
    setCurrentPage,
    toggleFollowingProgress,
    unFollow, unFollowThunkCreator
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

        // this.props.setCurrentPage(page)
        // this.props.setIsFetching(true)
        // userApi.getUsers(page, this.props.pageSize)
        //     .then(data => {
        //         this.props.setIsFetching(false)
        //         this.props.setUsers(data.items);
        //         // this.props.setTotalUsersCount(response.data.totalCount);
        //     })
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


// export type MapDispatchToPropsType = {
//     follow: (userId: number) => void
//     unFollow: (userId: number) => void
//     setUsers: (items: Array<OneUserType>) => void
//     setCurrentPage: (currentPage: number) => void
//     setTotalUsersCount: (totalCount: number) => void
//     setIsFetching:(isFetching: boolean)=>void
//
// };
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
