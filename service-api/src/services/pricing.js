import {get, post, withNamespace} from 'microrouter';
import {send} from 'micro';
import microCors from 'micro-cors';
import SubscriptionLengthModel from 'project-react-node-resources/lib/models/subscriptionLength';


const cors = microCors({ allowMethods: ['GET'], allowHeaders: ['Access-Control-Allow-Origin','Content-Type','Accept'] });

const validateRequestParameters = (requestParameters, res) => {
    let errorMessage;

    errorMessage = evalQueryStringKey(requestParameters, 'vin', 'VIN');
    if (errorMessage !== null)
        return { error: errorMessage };

    errorMessage = evalQueryStringKey(requestParameters, 'subscriptionLength', 'subscription length');
    if (errorMessage !== null)
        return { error: errorMessage };

    return null;
};

const evalQueryStringKey = (queryString, key, messageContext) =>
    (queryString && queryString[key]) ?
        null :
        `Invalid ${messageContext}`;

const pricing = withNamespace('/api/pricing')(
    get('/', async (req, res) => {
        const requestParameters = req.query;
        const validation = validateRequestParameters(requestParameters)
        if(validation && validation.error)
            return send(res, 400, { error: validation.error });

        return new SubscriptionLengthModel(parseInt(requestParameters.subscriptionLength, 10));
    })
);

export default cors(pricing);