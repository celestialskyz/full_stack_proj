import { connect } from 'react-redux';
import {fetchMusical} from '../../actions/musical_actions';
import {requestUsers} from '../../actions/user_actions';
import {fetchReviews} from '../../actions/review_actions';
import MusicalShow from './musical_show';
import moment from 'moment';
import {receivePendingRes} from '../../actions/reservation-actions';
import {openModal} from '../../actions/modal_actions';

const msp = (state, ownProps)=>{
  debugger
  let filterinfo= jQuery.isEmptyObject(state.ui.filters) ? 
  {inputQ:"",
     date: moment().format("yyyy-MM-DD"),
     party_size: 2,
     time: 1900}  
     : state.ui.filters;
     debugger
    let authorlist = typeof(state.entities.users) === 'object' && state.entities.users != null ?
       state.entities.users : {};
     
    let reviewinfo =  jQuery.isEmptyObject(state.ui.reviews) ?
     {} : Object.values(state.ui.reviews).map((review)=> {
       debugger
       let author = authorlist.find((user) => { return (user.id === review.user_id)});
        return (
          Object.assign({}, review, {author: author.first_name})
        );
    });

  return({
    musical: state.entities.musicals[ownProps.match.params.musicalId],
    reviews: reviewinfo,
    filters: filterinfo,
    reserver_id: state.session.currentUser? state.session.currentUser : {},
    kclass: "showp"
  });
};

const mdp = (dispatch)=>{
  return({
    fetchMusical: (musicalId)=>dispatch(fetchMusical(musicalId)),
    handleSubmit: (reservationDetails) => dispatch(receivePendingRes(reservationDetails)),
    openModal: (modal)=>dispatch(openModal(modal)),
    requestUsers: ()=>dispatch(requestUsers()),
    fetchReviews: musicalId => dispatch(fetchReviews(musicalId)),
   
    // createReview: review =>dispatch(createReview(review))
  });
};

export default connect(msp, mdp)(MusicalShow);