import React from "react";
import "./App.css";
import {Navbar} from "./componets/Navbar/Navbar";


import {Route, withRouter} from "react-router-dom";



import {UsersContainer} from "./componets/Users/UsersContainer";
import {ProfileContainer} from "./componets/Profile/ProfileContainer";
import {HeaderContainer} from "./componets/Header/HeaderContainer";
import { LoginContainer, LoginForm} from "./componets/Login/Login";
import {DialogsContainer} from "./componets/Dialogs/DialogsContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeAppTC} from "./Redux/app-reducer";
import {RootReducerType} from "./Redux/redux-store";
import {Preloader} from "./componets/common/preloader/Preloader";

type PropsType =  MapStateToPropsType & MapDispatchToPropsType
class App extends React.Component<PropsType> {

    componentDidMount() {
        this.props.initializeAppTC()
    }
    render() {

        if (!this.props.initialized) {
        return <Preloader/>}

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">


                    <Route exact path={"/dialogs"} render={() => <DialogsContainer/>}/>
                    <Route exact path={"/profile/:userId?"} render={() => <ProfileContainer/>}/>
                    <Route exact path={"/users"} render={() => <UsersContainer/>}/>
                    <Route exact path={"/login"} render={() => <LoginContainer/>}/>


                    {/*<Route path={"/news"} element={<News/>}/>*/}
                    {/*<Route path={"/music"} element={<Music/>}/>*/}
                    {/*<Route path={"/settings"} element={<Settings/>}/>*/}

                </div>
            </div>
        );
    }
}

type MapDispatchToPropsType = {
    initializeAppTC:()=>void
}

type MapStateToPropsType = {
    initialized: boolean

};

const mapStateToProps = (state: RootReducerType): MapStateToPropsType => ({
    initialized: state.app.initialized

})

export default compose(  connect(mapStateToProps, {initializeAppTC}))(App);
