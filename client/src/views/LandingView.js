import React, {Component} from 'react';
import subscriptionPropTypes from '../store/subscriptionPropTypes';
import navigation from '../utilities/navigation';
import constants from '../constants';
import subscriptionActions from '../store/subscriptions/actions'
import connectedStoreContainer from '../store/connectedStoreContainer';


class LandingView extends Component{

    static propTypes = subscriptionPropTypes;

    constructor(props){
        super(props);
    }

    componentDidMount() {
        if(this.props.subscriptionStore.subscription.customer === null){
            this.props.actions.dispatch(() => subscriptionActions.getSubscriptionLengthList());
            this.props.actions.dispatch(() => subscriptionActions.getVehicleList());
        }
    }

    render() {
        const customer = this.props.subscriptionStore.subscription.customer;
        return (
            <div id="main">
                {customer === null && this.newSubscriptionMarkup()}
                {customer !==null && this.subscriberMarkup()}
            </div>
        )
    }

    subscriberMarkup(){
        return (
            <React.Fragment>
                <header className="app-header">
                    <h1 className="app-title">Thank you for the opportunity!</h1>
                </header>
                <div id="main-subscription">
                    Welcome back {this.props.subscriptionStore.subscription.customer.name}!
                    Thank you for the opportunity to meet all your transportation needs
                </div>
                <div>
                    For your convenience, a summary of your current FlexDrive subscription
                    is available
                    <div>
                        <button className="button-success" onClick={() => navigation.go(constants.ROUTES.SUBSCRIPTION_CONFIRMATION)}>View Your Subscription</button>
                    </div>
                </div>

            </React.Fragment>
        );
    }

    newSubscriptionMarkup(){
        return (
            <React.Fragment>
                <header className="app-header">
                    <h1 className="app-title">Sign Up for a Subscription!</h1>
                </header>
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