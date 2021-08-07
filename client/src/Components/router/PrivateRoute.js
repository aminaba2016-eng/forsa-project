import React from 'react'
import {useSelector} from 'react-redux'
import {Route,Redirect} from "react-router-dom"
// import {userReducer} from '../../JS/reducers/user/user'
const PrivateRoute = ({component:Component, ...rest}) => {
    const isAuth = localStorage.getItem("token");

    const user = useSelector(state => state.userReducer.user)
if(isAuth){

    if(user.isAdmin){
     return <Route component={Component} {...rest}/>;
    }
}
    return <Redirect path="/"/>
    
}

export default PrivateRoute
