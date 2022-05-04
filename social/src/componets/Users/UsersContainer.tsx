import {connect} from "react-redux";
// import React from "react";

import {RootReducerType} from "../../Redux/redux-store";
import {
    follow,
    OneUserType,
    setCurrentPage, setIsFetching,
    setTotalUsersCount,
    setUsers,
    unFollow
} from "../../Redux/users-reducer";
import {Dispatch} from "redux";
import React from "react";
import axios from "axios";
import {Users} from "./Users";
import preloader from "../../images/Spinner-1s-200px.gif"
import {Preloader} from "../common/preloader/Preloader";

type PropsType = {
    items: Array<OneUserType>
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<OneUserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    setIsFetching:(isFetching: boolean)=>void

    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
};

export class UsersApiComponent extends React.Component<PropsType> {

    componentDidMount() {
        this.props.setIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
            {
                headers: {
                    'API-KEY': '13291219-4788-4555-a4f4-aaeffe0abc09'
                }
            })
            .then(response => {
                this.props.setIsFetching(false)
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })

    }

    onChangedPage = (page: number) => {
        this.props.setCurrentPage(page)
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`, {
            headers: {
                'API-KEY': '13291219-4788-4555-a4f4-aaeffe0abc09'
            }
        }).then(response => {
            this.props.setIsFetching(false)
            this.props.setUsers(response.data.items);
            // this.props.setTotalUsersCount(response.data.totalCount);
        })
    }

    render() {
        return <>
            {this.props.isFetching ?
                <Preloader/>
                : null }
            <Users
                totalCount={this.props.totalCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onChangedPage={this.onChangedPage}
                items={this.props.items}
                follow={this.props.follow}
                unFollow={this.props.unFollow}
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
};


export type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (items: Array<OneUserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    setIsFetching:(isFetching: boolean)=>void

};
const mapStateToProps = (state: RootReducerType): MapStateToPropsType => {
    return {
        items: state.usersPage.items,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    };
};


export const UsersContainer = connect(
    mapStateToProps,
    {
        follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, setIsFetching}
)(UsersApiComponent);
