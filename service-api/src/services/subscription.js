import { send, json, text } from 'micro';
import microCors from 'micro-cors';
import { get, post, withNamespace } from 'microrouter';
import CustomerModel from 'project-react-node-resources/lib/models/customer';


const cors = microCors({ allowMethods: ['GET', 'POST'], allowHeaders: ['Access-Control-Allow-Origin','Content-Type','Accept'] });

const subscription = withNamespace('/api/subscription')(
    get('/', () => 'My subscription route'),
    post('/', async (req, res) => {
        const subscription = await json(req);
        const customerModel = new CustomerModel();
        customerModel.mapFromService(subscription);

        /*
        * TODO: implement a storage mechanism
        * Right now just updating the subscription model with a customer
        * and passing back through for reference in local state store for confirmation
        * The intent is demonstrated
        * */
        const response = Object.assign({}, subscription, {customer: customerModel});
        console.log('Updated_Subscription', response);

        return response;
    })
);

export default cors(subscription);