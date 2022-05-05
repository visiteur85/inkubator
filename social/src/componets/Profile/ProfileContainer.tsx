import React from "react";

import {} from "../../App";




import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {RootReducerType} from "../../Redux/redux-store";

type PropsType = {
  
};

 class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`,
            {
                headers: {
                    'API-KEY': '13291219-4788-4555-a4f4-aaeffe0abc09'
                }
            })
            .then(response => {
                debugger
                this.props.setIsFetching(false)
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })
    }

    render() {
        return (
          <Profile
              //{...this.props}
          />
        );
    }};

 let mapStateToProps = (state: RootReducerType):MapStateToPropsType => {
     return
 }

 export default connect (mapStateToProps, {setUserProfile}) (ProfileContainer)