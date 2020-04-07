import { createNewUser } from '../actions/session_actions';
import { connect } from 'react-redux';
import SignUpForm from './sign_up_form.jsx';
import { openModal, closeModal } from '../actions/modal_actions';
import React from 'react';

const msp = (state = {}) => ({
    errors: state.errors,
    formType: "SignUp"
});

const mdp = (dispatch) => ({
    processForm: (formUser) => dispatch(createNewUser(formUser)),
    otherForm: (
        <button onClick={() => dispatch(openModal('login'))}>
          SignUp
        </button>
      ),
      closeModal: () => dispatch(closeModal())
});

export default connect(msp, mdp)(SignUpForm);