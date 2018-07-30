import React, {Component} from 'react';
import {Route, Router, browserHistory} from 'react-router';
import constants from './constants'
import LandingView from './views/LandingView';
import SubscriptionRequestFormView from './views/subscription/RequestFormView';
import SubscriptionConfirmationView from './views/subscription/ConfirmationView';
import NotFound404View from './views/NotFound404View';


class AppRouter extends Component{
    render(){
        return (
            <Router history={browserHistory}>
                <Route path={constants.ROUTES.HOME} component={LandingView}/>
                <Route path={constants.ROUTES.SUBSCRIPTION_SCHEDULE} component={SubscriptionRequestFormView}/>
                <Route path={constants.ROUTES.SUBSCRIPTION_CONFIRMATION} component={SubscriptionConfirmationView}/>
                <Route path="*" component={NotFound404View}/>
            </Router>
        );
    }
}

export default AppRouter;



