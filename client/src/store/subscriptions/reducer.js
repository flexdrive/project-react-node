import SubscriptionLengthModel from 'project-react-node-resources/lib/models/subscriptionLength';
import SubscriptionModel from 'project-react-node-resources/lib/models/subscription';
import constants from '../../constants';

const initialState = {
    subscriptionLengthList: [],
    vehicleList: [],
    subscriptionLength: new SubscriptionLengthModel(),
    subscription: new SubscriptionModel()
};

const mapSubscription = (subscriptionObject) => {
    const subscriptionModel = new SubscriptionModel();
    subscriptionModel.mapFromService(subscriptionObject);

    return subscriptionModel;
}

const reducer = (state = initialState, action) => {
    if (!action.type) return state;

    switch (action.type) {
        case constants.ACTIONS.GET_SUBSCRIPTION_LENGTH_LIST_SUCCESS:
            return Object.assign({}, state, {
                subscriptionLengthList: action.payload
            });
        case constants.ACTIONS.GET_VEHICLE_LIST_SUCCESS:
            return Object.assign({}, state, {
                vehicleList: action.payload
            });
        case constants.ACTIONS.GET_SUBSCRIPTION_PRICE_SUCCESS:
            return Object.assign({}, state, {
                subscriptionLength: new SubscriptionLengthModel(action.payload.length)
            });
        case constants.ACTIONS.GET_SUBSCRIPTION_SUCCESS:
            return Object.assign({}, state, {
                subscription: mapSubscription(action.payload)
            });
        case constants.ACTIONS.SET_SUBSCRIPTION_SUCCESS:
            return Object.assign({}, state, {
                subscription: mapSubscription(action.payload)
            });
        default:
            return state;
    }
};
export default reducer;