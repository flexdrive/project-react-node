import React, {Component} from 'react';
import subscriptionPropTypes from '../store/subscriptionPropTypes';
import navigation from '../utilities/navigation';
import localStorage from '../utilities/localStorage';
import constants from '../constants';
import subscriptionActions from '../store/subscriptions/actions'
import connectedStoreContainer from '../store/connectedStoreContainer';


class LandingView extends Component{

    static propTypes = subscriptionPropTypes;

    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.actions.dispatch(() => subscriptionActions.getSubscriptionLengthList());
        this.props.actions.dispatch(() => subscriptionActions.getVehicleList());
    }

    render() {
        return (
            <div id="main">
                <header className="app-header">
                    <h1 className="app-title">Sign Up for a Subscription!</h1>
                </header>
                {!localStorage.get(constants.LOCAL_STORAGE_KEY_SUBSCRIPTION) && this.newSubscriptionMarkup()}
                {localStorage.get(constants.LOCAL_STORAGE_KEY_SUBSCRIPTION) && this.subscriberMarkup()}
            </div>
        )
    }

    subscriberMarkup(){
        const subscriberInfo = localStorage.get(constants.LOCAL_STORAGE_KEY_SUBSCRIPTION, true);
        return (
            <React.Fragment>
                <div>
                    Welcome back {subscriberInfo.name}! Thank you for the opportunity to meet all your transportation needs
                </div>
                <div>
                    For your convenience, a summary of your current FlexDrive subscription
                    is available <button className="button-success" onClick={() => navigation.go(constants.ROUTES.SUBSCRIPTION_CONFIRMATION)}>here</button>
                </div>
            </React.Fragment>
        );
    }

    newSubscriptionMarkup(){
        return (
            <React.Fragment>
                <div>
                    Welcome to FlexDrive. Putting You in the drivers seat. Subscriptions are currently available in select cities.
                </div>
                <div>
                    <button className="button-success" onClick={() => navigation.go(constants.ROUTES.SUBSCRIPTION_SCHEDULE)}>Sign Up Now</button>
                </div>
            </React.Fragment>
        );
    }
}

export default connectedStoreContainer(LandingView);