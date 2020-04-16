import React from 'react';
import { connect } from 'react-redux';
import {requestRes, updateRes} from '../../actions/reservation-actions';
import ResForm from './event_form';

class EditResForm extends React.Component {

  componentDidMount(){
    this.props.requestRes(this.props.useId, this.props.match.params.resId);
  }

  render () {
    // DO NOT MODIFY THIS FUNCTION
    const { filters, musical, userId, formType} = this.props;

    // Hint: The event will not exist on the first render - what do we need to do
    // to get it?
    if (!filters) return null;
    return (
      <ResForm
      filters={filters}
        formType={formType}
        musical = {musical}
        submitEvent={submitEvent} />
    );
  }
}

const msp = (state) => {
  return({
    musical: state.entities.musicals[ownProps.match.params.musicalId],
    userId: state.session.currentUser.id,
    formType: 'Edit'
    }
  );
};

const mdp = dispatch => {
  return({
    requestRes: (userId, resId)=>dispatch(requestRes(userId, resId)),
    submitEvent:(userId, res)=>dispatch(updateRes(userId, res))
  });
  };
  
  export default connect(msp,mdp)(ResForm);