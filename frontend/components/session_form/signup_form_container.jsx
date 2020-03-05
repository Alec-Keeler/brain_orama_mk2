import React from 'react';
import { connect } from 'react-redux';
import { thunkSignup } from '../../actions/session_actions';
import SessionForm from './session_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const mSTP = (state, ownProps) => ({
    errors: state.session.errors,
    formType: 'signup'
})

const mDTP = dispatch => ({
    processForm: (user) => dispatch(thunkSignup(user)),
    otherForm: (
        <a onClick={() => dispatch(openModal('login'))} className='change-form-link'>
            Already have an account?
        </a>
    ),
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(SessionForm);