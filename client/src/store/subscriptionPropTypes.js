import PropTypes from 'prop-types';
import SubscriptionLengthModel from 'project-react-node-resources/lib/models/subscriptionLength';
import SubscriptionModel from 'project-react-node-resources/lib/models/subscription';


const propTypes = {
    subscriptionStore: PropTypes.shape({
        subscription: PropTypes.instanceOf(SubscriptionModel),
        subscriptionLength: PropTypes.instanceOf(SubscriptionLengthModel),
        subscriptionLengthList: PropTypes.arrayOf(
            PropTypes.shape({
                length: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
            })
        ),
        vehicleList: PropTypes.arrayOf(
            PropTypes.shape({
                make: PropTypes.string,
                model: PropTypes.string,
                year: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
                vin: PropTypes.string,
                odometer: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
            })
        )
    }),
    actions: PropTypes.shape({
        dispatch: PropTypes.func,
        getState: PropTypes.func,
    }),
};

export default propTypes;