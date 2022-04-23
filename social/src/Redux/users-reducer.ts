import { Post } from '../componets/Profile/My posts/Post/Post';
import React from 'react';

export type UsersPageType =
    {
        users: Array<OneUserType>
    }

export type OneUserType = {
    id: number
    followed: boolean
    fullName: string
    status: string
    location: LocationUserType
    photoURl: string

}
export type LocationUserType = {
    city: string
    country: string
};

export type UsersActionsType = FollowType | UnFollowType | setUserACType;

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
    users: Array<OneUserType>

};

let initialState: UsersPageType = {
    users:
        [
        // {
        //     id: 1, photoURl: "https://ktonanovenkogo.ru/image/chelovek.jpg",
        //     followed: false, fullName: "Pavel", status: "I am boss", location: { city: "Minsk", country: "Belarus" }
        // },
        // {
        //     id: 2, photoURl: "https://ktonanovenkogo.ru/image/chelovek.jpg",
        //     followed: true, fullName: "Sasha", status: "I am boss too", location: { city: "New-York", country: "USA" }
        // },
        // {
        //     id: 3, photoURl: "https://ktonanovenkogo.ru/image/chelovek.jpg",
        //     followed: false, fullName: "Andrew", status: "I am boss too too)", location: { city: "Kiev", country: "Ukrain" }
        // }
    ]
}



export const usersReducer = (state = initialState, action: UsersActionsType) => {
    switch (action.type) {

        case "FOLLOW": {
        
            // console.log(action.userId)

            let newState = { ...state, users: state.users.map(user => user.id === action.userId ?
                    { ...user, followed: true } : user) }
            // console.log(newState)
            return newState
        }
        case "UNFOLLOW": {
            // console.log(action.userId)
            let newState = { ...state, users: state.users.map(user => user.id === action.userId ?
                    { ...user, followed: false } : user) }
            return newState
        }
        case "SET-USERS": {
            let newState = { ...state, users: action.users }
            return newState
        }
        default: return state
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

export let setUserAC = (users: Array<OneUserType>): setUserACType => {
    return {
        type: "SET-USERS",
        users: users

    } as const
};











