import { get, post, withNamespace } from 'microrouter';
import microCors from 'micro-cors';
const vehicles = require('project-react-node-resources/data/vehicle.json');


const cors = microCors({ allowMethods: ['GET'], allowHeaders: ['Access-Control-Allow-Origin','Content-Type','Accept'] });

const vehicle = withNamespace('/api/vehicle')(
    get('/', () => vehicles.data)
);

export default cors(vehicle);