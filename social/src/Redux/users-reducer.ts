
import React from 'react';

export type UsersPageType =
    {
        items: Array<OneUserType>
        totalCount: number
        pageSize: number
        currentPage: number
        isFetching:boolean
        followingInProgress:number[]

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

export type UsersActionsType = FollowType | UnFollowType | setUserACType |
    setCurrentPageACType | setTotalUsersCountACType | setIsFetchingACType | toggleFollowingProgressType;

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

};

export type setTotalUsersCountACType = {
    type: "SET-TOTAL -USERS-COUNT"
    totalCount:number

};

export type setIsFetchingACType = {
    type: "TOGGLE_IS_FETCHING"
    isFetching:boolean

};

export type toggleFollowingProgressType = {
    type: "TOGGLE_IS_FOLLOWING_PROGRESS"
    isFetching:boolean
    userId:number

};





let initialState: UsersPageType = {
    items: [],
    pageSize: 100,
    totalCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress:[]
}


export const usersReducer = (state = initialState, action: UsersActionsType) => {
    switch (action.type) {

        case "FOLLOW": {
                     let newState = {
                ...state, items: state.items.map(user => user.id === action.userId ?
                    {...user, followed: true} : user)
            }
                     return newState
        }
        case "UNFOLLOW": {
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
        case "TOGGLE_IS_FETCHING": {
            let newState = {...state, isFetching: action.isFetching};
            return newState
        }
        case "TOGGLE_IS_FOLLOWING_PROGRESS": {
            let newState = {...state,
                followingInProgress: action.isFetching ?
                    [...state.followingInProgress, action.userId]:
                    state.followingInProgress.filter(id=>id!=action.userId)

            };
            return newState
        }
        default:
            return state
    }
};


export const follow = (userId: number): FollowType => {
    return {
        type: "FOLLOW",
        userId: userId
    } as const
};

export let unFollow = (userId: number): UnFollowType => {
    return {
        type: "UNFOLLOW",
        userId: userId

    } as const
};

export let setUsers = (items: Array<OneUserType>): setUserACType => {
    return {
        type: "SET-USERS",
        items: items

    } as const
};

export let setCurrentPage = (currentPage: number): setCurrentPageACType => {
    return {
        type: "SET-Current-PAGE",
        currentPage

    } as const
};

export let setTotalUsersCount = (totalCount: number): setTotalUsersCountACType => {
    return {
        type: "SET-TOTAL -USERS-COUNT",
        totalCount

    } as const
};

export let setIsFetching = (isFetching: boolean): setIsFetchingACType => {
    return {
        type: "TOGGLE_IS_FETCHING",
        isFetching

    } as const
};



export let toggleFollowingProgress = (isFetching: boolean, userId:number): toggleFollowingProgressType => {
    return {
        type: "TOGGLE_IS_FOLLOWING_PROGRESS",
        isFetching,
        userId

    } as const
};







