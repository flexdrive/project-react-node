import constants from '../../constants';


const subscriptionActions = {
    getSubscriptionLengthList() {
        return (dispatch) => {
            return fetch(constants.SERVICE_ENDPOINTS.SUBSCRIPTION_API_SUBSCRIPTION_LENGTH)
                .then(response => response.json())
                .then(data  => {
                    dispatch(this.getSubscriptionLengthListSuccess(data));
                });
        };
    },

    getSubscriptionLengthListSuccess: subscriptionLengthList => ({
        type: constants.ACTIONS.GET_SUBSCRIPTION_LENGTH_LIST_SUCCESS,
        payload: subscriptionLengthList
    }),

    getVehicleList() {
        return dispatch => {
            return  fetch(constants.SERVICE_ENDPOINTS.SUBSCRIPTION_API_VEHICLE)
                .then(response => response.json())
                .then(data  => {
                    dispatch(this.getVehicleListSuccess(data));
                });
        };
    },

    getVehicleListSuccess: vehicleList => ({
        type: constants.ACTIONS.GET_VEHICLE_LIST_SUCCESS,
        payload: vehicleList
    }),

    getSubscriptionPrice(subscriptionLength, vin) {
        const serviceUrl = new URL(constants.SERVICE_ENDPOINTS.SUBSCRIPTION_API_PRICING);
        const qsParams = {subscriptionLength, vin};
        Object.keys(qsParams).forEach(key => serviceUrl.searchParams.append(key, qsParams[key]));

        return dispatch => {
            return fetch(serviceUrl)
                .then(response => response.json())
                .then(data  => {
                    dispatch(this.getSubscriptionPriceSuccess(data));
                });
        };
    },

    getSubscriptionPriceSuccess: subscriptionLength => ({
        type: constants.ACTIONS.GET_SUBSCRIPTION_PRICE_SUCCESS,
        payload: subscriptionLength
    }),


    getSubscription() {
        return dispatch => {
            return  fetch(constants.SERVICE_ENDPOINTS.SUBSCRIPTION_API_SUBSCRIPTION)
                .then(response => response.json())
                .then(data  => {
                    dispatch(this.getSubscriptionSuccess(data));
                });
        };
    },

    getSubscriptionSuccess: subscription => ({
        type: constants.ACTIONS.GET_SUBSCRIPTION_SUCCESS,
        payload: subscription
    }),

    setSubscription(subscription) {
        return dispatch => {
            return  fetch(
                constants.SERVICE_ENDPOINTS.SUBSCRIPTION_API_SUBSCRIPTION,
                {
                    method: 'post',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: subscription
                })
                .then(response => response.json())
                .then(data  => {
                    dispatch(this.setSubscriptionSuccess(data));
                });
        };
    },

    setSubscriptionSuccess: subscription => ({
        type: constants.ACTIONS.SET_SUBSCRIPTION_SUCCESS,
        payload: subscription
    })
};

export default subscriptionActions;