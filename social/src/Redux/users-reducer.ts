import {Post} from '../componets/Profile/My posts/Post/Post';
import React from 'react';

export type UsersPageType =
    {
        items: Array<OneUserType>
        totalCount: number
        pageSize: number
        currentPage: number

    }

export type OneUserType = {
    name: string
    id: number
    uniqueUrlName: string | null
    photos: photosType
    status: string | null
    followed: boolean

}
export type photosType = {
    small: string | null
    large: string | null
};

export type UsersActionsType = FollowType | UnFollowType | setUserACType | setCurrentPageACType | setTotalUsersCountACType;

export type FollowType = {
    type: "FOLLOW"
    userId: number
};

export type UnFollowType = {
    type: "UNFOLLOW"
    userId: number

};
export type setUserACType = {
    type: "SET-USERS"
    items: Array<OneUserType>

};

export type setCurrentPageACType = {
    type: "SET-Current-PAGE"
    currentPage:number

}

export type setTotalUsersCountACType = {
    type: "SET-TOTAL -USERS-COUNT"
    totalCount:number

}



let initialState: UsersPageType = {
    items: [],
    pageSize: 100,
    totalCount: 0,

    currentPage: 1
}


export const usersReducer = (state = initialState, action: UsersActionsType) => {
    switch (action.type) {

        case "FOLLOW": {

            // console.log(action.userId)

            let newState = {
                ...state, items: state.items.map(user => user.id === action.userId ?
                    {...user, followed: true} : user)
            }
            // console.log(newState)
            return newState
        }
        case "UNFOLLOW": {
            // console.log(action.userId)
            let newState = {
                ...state, items: state.items.map(user => user.id === action.userId ?
                    {...user, followed: false} : user)
            }
            return newState
        }
        case "SET-USERS": {
            let newState = {...state, items: action.items}
            return newState
        }

        case "SET-Current-PAGE": {
            let newState = {...state, currentPage: action.currentPage}
            return newState
        }

        case "SET-TOTAL -USERS-COUNT": {
            let newState = {...state, totalCount: action.totalCount}
            return newState
        }


        default:
            return state
    }
};


export const followAC = (userId: number): FollowType => {
    return {
        type: "FOLLOW",
        userId: userId
    } as const
};

export let unfollowAC = (userId: number): UnFollowType => {
    return {
        type: "UNFOLLOW",
        userId: userId

    } as const
};

export let setUserAC = (items: Array<OneUserType>): setUserACType => {
    return {
        type: "SET-USERS",
        items: items

    } as const
};

export let setCurrentPageAC = (currentPage: number): setCurrentPageACType => {
    return {
        type: "SET-Current-PAGE",
        currentPage

    } as const
};

export let setTotalUsersCountAC = (totalCount: number): setTotalUsersCountACType => {
    return {
        type: "SET-TOTAL -USERS-COUNT",
        totalCount

    } as const
};











