import { Route, Switch, Link, withRouter } from "react-router-dom";
import React from 'react';
import GreetingContainer from "./greeting_container";
import Modal from './modal.jsx';
// import MusicalIndexContainer from "./musical_index/musical_index_container";
import MusicalShowContainer from "./musical_show/musical_show_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import ResShowContainer from './reservation_show/reservation_show_container';
import ResIndxContainer from './reservation_index/reservation_index_container';
import indexed from './testing';
import ResConfirmFormContainer from "./reservation/reservation_confirm_container";
import ResEditContainer from "./reservation_edit_delete/edit_reservation_form_container";
import Res_made_container from "./reservation/res_made_container";
import Res_deleted_container from "./reservation_edit_delete/res_deleted_container";
import DeleteResIDContainer from "./reservation_edit_delete/delete_resId_container";
import Review_create_container from "./review/review_create_container";
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
        <Route exact path= "/musicals/:musicalId/ResMade" component = {Res_made_container}/>
        <ProtectedRoute exact path= "/musicals/:musicalId/reservations/delete" component = {Res_deleted_container}/>
        <ProtectedRoute exact path= "/musicals/:musicalId/reservations/:resId/delete" component = {DeleteResIDContainer}/>
        <Route exact path="/musicals/:musicalId" component={MusicalShowContainer} />
        <Route exact path= "/musicals/:musicalId/review" component = {Review_create_container}/>

        <Switch>
            <Route path="/reservations" component={ResIndxContainer} />
            <Route exact path= "/musicals/:musicalId/reservations/:resId" component = {ResShowContainer}/>
            <Route exact path= "/musicals/:musicalId/reservations/:resId/edit" component = {ResEditContainer}/>
        </Switch>
    </div>)
}

export default withRouter(App);