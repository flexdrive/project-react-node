export default {
    LOCAL_STORAGE_KEY_SUBSCRIPTION: 'fd_subscription',
    ROUTES: {
        HOME: '/',
        SUBSCRIPTION_SCHEDULE: '/subscription/schedule',
        SUBSCRIPTION_CONFIRMATION: '/subscription/confirmation'
    },
    ACTIONS: {
        GET_SUBSCRIPTION_LENGTH_LIST_SUCCESS: 'GET_SUBSCRIPTION_LENGTH_LIST_SUCCESS',
        GET_VEHICLE_LIST_SUCCESS: 'GET_VEHICLE_LIST_SUCCESS',
        GET_SUBSCRIPTION_PRICE_SUCCESS: 'GET_SUBSCRIPTION_PRICE_SUCCESS',
        GET_SUBSCRIPTION_SUCCESS: 'GET_SUBSCRIPTION_SUCCESS',
        SET_SUBSCRIPTION_SUCCESS: 'SET_SUBSCRIPTION_SUCCESS'
    },
    SERVICE_ENDPOINTS:{
        API_HOST_DEV: 'http://localhost:3001',
        SUBSCRIPTION_API_PRICING: 'http://localhost:3001/api/pricing',
        SUBSCRIPTION_API_SUBSCRIPTION: 'http://localhost:3001/api/subscription',
        SUBSCRIPTION_API_SUBSCRIPTION_LENGTH: 'http://localhost:3001/api/subscriptionlength',
        SUBSCRIPTION_API_VEHICLE: 'http://localhost:3001/api/vehicle'
    }
};