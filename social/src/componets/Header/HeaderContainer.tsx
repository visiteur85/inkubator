import React from 'react';
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {RootReducerType} from "../../Redux/redux-store";
import {AuthFromServerType, setUserData, setUserDataType} from "../../Redux/auth-reducer";

type PropsType = MapStateToPropsType & MapDispatchToPropsType

export class HeaderAPIContainer extends React.Component<PropsType> {

    componentDidMount() {
        axios.get<AuthFromServerType>(`https://social-network.samuraijs.com/api/1.0/auth/me`,
            {
                headers: {
                    'API-KEY': '13291219-4788-4555-a4f4-aaeffe0abc09'
                },
                withCredentials: true
            })
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.setUserData(response.data.data.id, response.data.data.email,
                        response.data.data.login)
                }
            })
    }

    render() {
        return <Header isAuth={this.props.isAuth}
                       login={this.props.login}
        />
    }
};

type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
};
type MapDispatchToPropsType = {
    setUserData: (id: number, email: string, login: string) => void
}


const mapStateToProps = (state: RootReducerType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})
// let WithAUTHContainer = withRouter(HeaderAPIContainer)

export const HeaderContainer = connect<MapStateToPropsType, MapDispatchToPropsType, unknown, RootReducerType>(mapStateToProps, {setUserData})(HeaderAPIContainer);

