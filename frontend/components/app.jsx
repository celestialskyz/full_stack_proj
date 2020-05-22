import { Route, Switch, Link, withRouter } from "react-router-dom";
import React from 'react';
import GreetingContainer from "./greeting_container";
// import SignupContainer from './sign_up_form_container';
// import SignInContainer from './sign_in_form_container';
// import {AuthRoute} from "../util/route_util";
import Modal from './modal.jsx';
// import MusicalIndexContainer from "./musical_index/musical_index_container";
import MusicalShowContainer from "./musical_show/musical_show_container";
// import { AuthRoute, ProtectedRoute } from "../util/route_util";
import ResShowContainer from './reservation_show/reservation_show_container';

import indexed from './testing';
import ResConfirmFormContainer from "./reservation/reservation_confirm_container";
import ResMadeContainer from "./reservation/res_made_container";
const App = () =>{
    // const additionalClass = state.ui.filters.query ? "search" : "home";

    return(
    <div>
        <Modal />
        <header className = "header"> 
            <div className = "logo">
                <Link to="/" className="header-link">
                <i className="fas fa-theater-masks"/>
                <h1>OpenPlaybill</h1>
                </Link>
            </div>
            <GreetingContainer />
        </header>
        
        {/* <Route exact path="/" component={MainComponent} /> */}
        <Route exact path="/" component={indexed} />
        <Route exact path="/musicals/confirmRes" component={ResConfirmFormContainer} />
        <Route exact path= "/musicals/ResMade" component = {ResMadeContainer}/>
        <Route exact path= "/musicals/ResMade/:resId" component = {ResShowContainer}/>
        {/* <ProtectedRoute exact path= "/musicals/deleted" component = {ResDeleted}/> */}
        <Route exact path="/musicals/:musicalId" component={MusicalShowContainer} />
        {/* <Route exact path="/reservations" component={ResIndxContainer} /> */}
    </div>)
}

export default withRouter(App);