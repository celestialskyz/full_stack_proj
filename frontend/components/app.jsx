import { Route, Switch, Link } from "react-router-dom";
import React from 'react';
import GreetingContainer from "./greeting_container";
// import SignupContainer from './sign_up_form_container';
// import SignInContainer from './sign_in_form_container';
// import {AuthRoute} from "../util/route_util";
import Modal from './modal.jsx';
// import MusicalIndexContainer from "./musical_index/musical_index_container";
import MusicalShowContainer from "./musical_show/musical_show_container";
import SeachContainer from './search/search_container';
//import { AuthRoute, ProtectedRoute } from "../util/route_util";
 
const App = () => (
    <div>
        <Modal />
        <header className = "header">
            <Link to="/" className="header-link">
            <h1>OpenPlaybill</h1>
            </Link>
            <GreetingContainer />
        </header>
        <Route exact path="/" component={SeachContainer}/>
        {/* index container when searching */}
        <Route exact path="/musicals/:musicalId" component={MusicalShowContainer} />
    </div>
);

export default App;