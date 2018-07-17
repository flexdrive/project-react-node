import React from 'react';
import formatters from '../../utilities/fomatters';
import vehicleEvergreen from '../../assets/images/vehicle_evergreen.png';


const Confirmation = ({subscription}) => (
    <div id="subscription-container">
        <h1>Subscription Summary</h1>
        <div id>
            Thank you for choosing FlexDrive. You're now in the drivers seat.
        </div>
        <div id="subscription-summary">
            <div id="customer-info">
                <h2>Customer Information</h2>
                <ul className="summary">
                    <li>
                        <div className="key">Name</div>
                        <div className="key-value">{subscription.customer.name}</div>
                    </li>
                    <li>
                        <div className="key">Email Address</div>
                        <div className="key-value">{subscription.customer.emailAddress}</div>
                    </li>
                    <li>
                        <div className="key">Birthday</div>
                        <div className="key-value">{subscription.customer.dateOfBirth}</div>
                    </li>
                </ul>
            </div>
            <div id="subscription-length-info">
                <h2>Subscription Information</h2>
                <ul className="summary">
                    <li>
                        <div className="key">Subscription Length</div>
                        <div className="key-value">{formatters.daysToWeeks(subscription.subscriptionLength.length)}</div>
                    </li>
                    <li>
                        <div className="key">Price</div>
                        <div className="key-value price">{formatters.numberToCurrency(subscription.subscriptionLength.price)}</div>
                    </li>
                </ul>
            </div>
            <div id="vehicle-info">
                <h2>Vehicle Information</h2>
                <ul className="summary">
                    <li>
                        <div className="key">Make</div>
                        <div className="key-value">{subscription.vehicle.make}</div>
                    </li>
                    <li>
                        <div className="key">Model</div>
                        <div className="key-value">{subscription.vehicle.model}</div>
                    </li>
                    <li>
                        <div className="key">Model Year</div>
                        <div className="key-value">{subscription.vehicle.year}</div>
                    </li>
                    <li>
                        <div className="key">Milage</div>
                        <div className="key-value">{subscription.vehicle.odometer}</div>
                    </li>
                    <li>
                        <div className="key">VIN ID</div>
                        <div className="key-value">{subscription.vehicle.vin}</div>
                    </li>
                </ul>
            </div>
            <img className="vehicle-image" src={vehicleEvergreen} alt={`${subscription.vehicle.make} ${subscription.vehicle.model}`} />
        </div>
    </div>
);

export default Confirmation;