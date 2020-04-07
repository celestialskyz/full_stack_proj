import { Route, Switch, Link } from "react-router-dom";
import React from 'react';
import GreetingContainer from "./greeting_container";
// import SignupContainer from './sign_up_form_container';
// import SignInContainer from './sign_in_form_container';
import {AuthRoute} from "../util/route_util";
import Modal from './modal.jsx';
//import { AuthRoute, ProtectedRoute } from "../util/route_util";
 
const App = () => (
    <div>
        <Modal />
        <header>
            <Link to="/" className="header-link">
            <h1>OpenPlaybill</h1>
            </Link>
            <GreetingContainer />
        </header>
        
        
    </div>
);

export default App;