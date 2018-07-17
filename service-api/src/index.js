import { router } from 'microrouter'
import pricing from './services/pricing';
import subscription from './services/subscription';
import subscriptionLength from './services/subscriptionLength';
import vehicle from './services/vehicle';


const routes = router(
    pricing,
    subscription,
    subscriptionLength,
    vehicle
);

export default routes;