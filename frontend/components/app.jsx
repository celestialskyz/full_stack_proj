import { Route, Switch, Link } from "react-router-dom";
import React from 'react';
import GreetingContainer from "./greeting_container";
// import SignupContainer from './sign_up_form_container';
// import SignInContainer from './sign_in_form_container';
// import {AuthRoute} from "../util/route_util";
import Modal from './modal.jsx';
import MusicalIndexContainer from "./musical_index/musical_index_container";
import MusicalShowContainer from "./musical_show/musical_show_container";
// import SeachContainer from './search/search_container';
//import { AuthRoute, ProtectedRoute } from "../util/route_util";
//  import MusicalSearch from './search/musical_search';
import MusicalSearchContainer from './search/search_container';
import MusicalIndex from "./musical_index/musical_index";
import MainComponent from './main_component';
import indexed from './testing';

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
        
        <Route exact path="/musicals/:musicalId" component={MusicalShowContainer} />
    </div>)
}

export default App;