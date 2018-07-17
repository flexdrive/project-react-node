import CustomerModel from 'project-react-node-resources/lib/models/customer';
import SubscriptionModel from 'project-react-node-resources/lib/models/subscription';
import SubscriptionLengthModel from 'project-react-node-resources/lib/models/subscriptionLength';
import VehicleModel from 'project-react-node-resources/lib/models/vehicle';

const vehicle = {
    "make": "Audi",
    "model": "A4",
    "year": "2017",
    "vin": "1ABCD23HIJK112233",
    "odometer": "18200"
};

export const customerMock = new CustomerModel('John Smith', 'jsmith@gmail.com', '10/01/1990');

export const vehicleMock = () => {
    const mock = new VehicleModel();
    mock.mapFromService(vehicle);
    return mock;
};

export const subscriptionLengthMock = new SubscriptionLengthModel(28);

export const subscriptionMock = new SubscriptionModel(customerMock, vehicleMock(), subscriptionLengthMock);