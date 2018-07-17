import { get, withNamespace } from 'microrouter';
import microCors from 'micro-cors';
import SubscriptionLengthModel from 'project-react-node-resources/lib/models/subscriptionLength';

const cors = microCors({ allowMethods: ['GET'], allowHeaders: ['Access-Control-Allow-Origin','Content-Type','Accept'] });

const subscriptionLength = withNamespace('/api/subscriptionlength')(
    get('/', () => {
        const filteredSubscriptionList = [];
        /*
        * this is only necessary fro demonstration due to simple
        * structure of subscriptionLength model
        * (pricing live in model for POC, but would live elsewhere for prod RC)
        * */
        SubscriptionLengthModel.availableSubscriptions
            .forEach(model => {
                filteredSubscriptionList.push({length: model.length});
            });
        return filteredSubscriptionList;
    })
);

export default cors(subscriptionLength);