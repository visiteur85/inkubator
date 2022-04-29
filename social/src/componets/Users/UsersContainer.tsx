import {connect} from "react-redux";
// import React from "react";
import {Users} from "./Users";
import {RootReducerType} from "../../Redux/redux-store";
import {followAC, OneUserType, setUserAC, unfollowAC} from "../../Redux/users-reducer";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    items: Array<OneUserType>
    pageSize:number
    totalCount:number
    currentPage:number
};
const mapStateToProps = (state: RootReducerType): MapStateToPropsType => {
    return {
        items: state.usersPage.items,
        pageSize: state.usersPage.pageSize,
        totalCount:state.usersPage.totalCount,
        currentPage:state.usersPage.currentPage
    };
};

export type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (items: Array<OneUserType>) => void
};
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId));
        },
        unFollow: (userId: number) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users: Array<OneUserType>) => {
            dispatch(setUserAC(users))
        }
    };
};

export const UsersContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Users);
