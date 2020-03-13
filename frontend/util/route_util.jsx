import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const Prot = ({ component: Component, path, loggedIn, exact}) => (
    <Route path={path} exact={exact} render={props =>
        loggedIn ? <Component {...props} /> : <Redirect to='/' />} 
    />
)

const mSTP = state => {
    return {loggedIn: Boolean(state.session.id)}
}

export const ProtRoute = withRouter(
    connect(mSTP, null)(Prot)
)