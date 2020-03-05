import React from 'react';
import { connect } from 'react-redux';
import { thunkLogout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import Greeting from './greeting';

const mSTP = state => {
    return (
        {currentUser: state.entities.users[state.session.id]}
    )
};

const mDTP = dispatch => ({
    logout: () => dispatch(thunkLogout()),
    openModal: modal => dispatch(openModal(modal))
});

export default connect(mSTP, mDTP)(Greeting);