import { loginUser } from '../actions/session_actions';
import { connect } from 'react-redux';
import SignInForm from './sign_in_form.jsx';
import { openModal, closeModal } from '../actions/modal_actions';
import React from 'react';

const msp = (state = {}) => {
    // debugger
    return ({errors: state.errors.session,
    formType: "SignIn"});

};

const mdp = (dispatch) => ({
    processForm: (formUser) => dispatch(loginUser(formUser)),
    otherForm: (
        <button onClick={() => dispatch(openModal('signup'))}>
        Sign In
      </button>
    ),
    closeModal: () => dispatch(closeModal())
});

export default connect(msp, mdp)(SignInForm);