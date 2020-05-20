import React from 'react';
import { closeModal } from '../actions/modal_actions';
import { connect } from 'react-redux';
import SignupContainer from './sign_up_form_container';
import SignInContainer from './sign_in_form_container';

function Modal({modal, closeModal}){
  // debugger
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'signup':
      component = <SignupContainer />;
      break;
    case 'login':
      component = <SignInContainer />;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}


const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
