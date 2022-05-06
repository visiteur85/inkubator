import React from "react";

import {} from "../../App";

import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {RootReducerType} from "../../Redux/redux-store";
import {ProfileFromServerType, setUserProfile} from "../../Redux/profile-reducer";

import {OneUserType} from "../../Redux/users-reducer";

type PropsType = {
    setUserProfile:(profile: ProfileFromServerType | null)=>void
    profile:ProfileFromServerType | null
};

 export  class ProfileAPIContainer extends React.Component<PropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`,
            {
                headers: {
                    'API-KEY': '13291219-4788-4555-a4f4-aaeffe0abc09'
                }
            })
            .then(response => {
                this.props.setUserProfile(response.data)

            })
    }

    render() {
        return (
          <Profile profile={this.props.profile}
              //{...this.props}
          />
        );
    }};

type MapStateToPropsType = {
    profile: ProfileFromServerType | null

};

 let mapStateToProps = (state: RootReducerType):MapStateToPropsType => {
     return {
         profile:state.profilePage.profile
     }
 }

 export const ProfileContainer =   connect (mapStateToProps, {setUserProfile}) (ProfileAPIContainer)