import { connect } from "react-redux";
import React  from "react";
import { Users } from "./Users";
import { RootReducerType } from "../../Redux/redux-store";
import { followAC, OneUserType, setUserAC, unfollowAC } from "../../Redux/users-reducer";
import { Dispatch } from "redux";

type MapStateToPropsType = {
  users: Array<OneUserType>;
};
const mapStateToProps = (state: RootReducerType): MapStateToPropsType => {
  return {
    users: state.usersPage.users,
  };
};

export type MapDispatchToPropsType = {
  follow:(userId: number)=>void
  unFollow:(userId: number)=>void
  setUsers: (users: Array<OneUserType>)=>void
};
const mapDispatchToProps = (dispatch:Dispatch): MapDispatchToPropsType => {
  return {
    follow: (userId: number) => {
      dispatch(followAC(userId));
    },
    unFollow: (userId: number) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users: Array<OneUserType>)=> {
      dispatch(setUserAC(users))
    }
  };
};

export const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
