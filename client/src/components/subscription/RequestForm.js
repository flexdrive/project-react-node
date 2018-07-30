import React, {Component} from 'react';
import SubscriptionLengthModel from 'project-react-node-resources/lib/models/subscriptionLength';
import formatters from '../../utilities/fomatters';
import navigation from '../../utilities/navigation';
import formDataToJson from '../../utilities/formDataToJson';
import constants from '../../constants';
import vehicleEvergreen from '../../assets/images/vehicle_evergreen.png';
import subscriptionActions from '../../store/subscriptions/actions';
import subscriptionPropTypes from "../../store/subscriptionPropTypes";


class RequestForm extends Component{

    static propTypes = subscriptionPropTypes;

    constructor(props){
        super(props);

        this.state = {
            name: '',
            emailAddress: '',
            dateOfBirth: '',
            vehicle: this.props.subscriptionStore.vehicleList[0],
            subscriptionLength: new SubscriptionLengthModel(this.props.subscriptionStore.subscriptionLengthList[0].length)
        }
    }

    componentWillReceiveProps(nextProps){
        if(this.props.subscriptionStore.subscriptionLength.price !== nextProps.subscriptionStore.subscriptionLength.price)
            this.setState({subscriptionLength: nextProps.subscriptionStore.subscriptionLength});

        if(nextProps.subscriptionStore.subscription.customer !== null)
            navigation.go(constants.ROUTES.SUBSCRIPTION_CONFIRMATION);
    }

    render(){
        return (
            <React.Fragment>
                <form id="request-form" onSubmit={this.formSubmissionHandler}>
                    <div className="entry-field">
                        <input id="name" name="name"
                               className="effect-16"
                               type="text"
                               value={this.state.value}
                               onChange={(e) => this.changeHandlerFields('name', e)}
                               placeholder=""
                               required />
                        <label>Name</label>
                        <span className="focus-border"/>
                    </div>
                    <div className="entry-field">
                        <input id="emailAddress" name="emailAddress"
                               className="effect-16"
                               type="email"
                               value={this.state.value}
                               onChange={(e) => this.changeHandlerFields('emailAddress', e)}
                               placeholder=""
                               required />
                        <label>Email</label>
                        <span className="focus-border"/>
                    </div>
                    <div className="entry-field">
                        <input id="dateOfBirth" name="dateOfBirth"
                               className="effect-16"
                               type="date"
                               value={this.state.dateOfBirth}
                               onChange={(e) => this.changeHandlerFields('dateOfBirth', e)}
                               placeholder="Date"
                               required />
                        <label>Birthday</label>
                        <span className="focus-border"/>
                    </div>
                    {this.subscriptionLengthControlMarkup()}
                    {this.vehicleControlMarkup()}
                    {this.vehicleDetailMarkup()}
                    <div className="button-wrapper">
                        <input className="button-success" type="submit" value="Submit" />
                        <button className="button-cancel" onClick={() => navigation.go(constants.ROUTES.HOME)}>Cancel</button>
                    </div>
                </form>
            </React.Fragment>
        );
    }

    vehicleControlMarkup = () => {
        return (
            <React.Fragment>
                <div className="entry-field">
                    <label>Vehicle</label>
                    <select id="vehicle" name="vehicle" value={this.state.vehicle && this.state.vehicle.vin} onChange={this.changeHandlerVehicle}>
                        {this.props.subscriptionStore.vehicleList.map((vehicle, index) => {
                            return <option key={`vl_${index}`} value={vehicle.vin}>{vehicle.make} {vehicle.model}</option>;
                        })}
                    </select>
                </div>
            </React.Fragment>
        );
    }

    subscriptionLengthControlMarkup = () => {
        return (
            <React.Fragment>
                <div className="entry-field">
                    <label>Subscription Length</label>
                    <select id="subscriptionLength" name="subscriptionLength" value={this.state.subscriptionLength && this.state.subscriptionLength.length} onChange={this.changeHandlerSubscriptionLength}>
                        {this.props.subscriptionStore.subscriptionLengthList.map((listItem, index) => {
                            return <option key={`sl_${index}`} value={listItem.length}>{formatters.daysToWeeks(listItem.length)}</option>;
                        })}
                    </select>
                </div>
            </React.Fragment>
        );
    }

    vehicleDetailMarkup(){
        let vehicle = this.state.vehicle;
        if(vehicle === '')
            vehicle = this.props.subscriptionStore.vehicleList[0];

        return (
            <div id="vehicle-info">
                <h2>Vehicle Information</h2>
                <ul className="summary">
                    <li>
                        <div className="key">Make</div>
                        <div className="key-value">{vehicle.make}</div>
                    </li>
                    <li>
                        <div className="key">Model</div>
                        <div className="key-value">{vehicle.model}</div>
                    </li>
                    <li>
                        <div className="key">Model Year</div>
                        <div className="key-value">{vehicle.year}</div>
                    </li>
                    <li>
                        <div className="key">Milage</div>
                        <div className="key-value">{vehicle.odometer}</div>
                    </li>
                    <li>
                        <div className="key">VIN ID</div>
                        <div className="key-value">{vehicle.vin}</div>
                    </li>
                    <li>
                        <div className="key">PRICE</div>
                        <div className="key-value price">{formatters.numberToCurrency(this.state.subscriptionLength.price)}</div>
                    </li>
                </ul>
                <img className="vehicle-image" src={vehicleEvergreen} alt={`${vehicle.make} ${vehicle.model}`} />
            </div>
        )
    }

    changeHandlerFields = (field, event) => {
        const selectedValue = event.target.value;

        this.setState({[field]: selectedValue});
    }

    changeHandlerSubscriptionLength = (event) => {
        const selectedValue = event.target.value;

        /*
        * Get Price info from micro service
        * */
        this.props.actions.dispatch(()=> subscriptionActions.getSubscriptionPrice(selectedValue, this.state.vehicle.vin));
    }

    changeHandlerVehicle = (event) => {
        const selectedValue = event.target.value;
        const selectedVehicle = this.props.subscriptionStore.vehicleList.filter(vehicle => vehicle.vin === selectedValue);

        if(selectedVehicle.length)
            this.setState({vehicle: selectedVehicle[0]});
    }

    formSubmissionHandler = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        /*
        * convert the form data object to a usable format and
        * update the form values with the appropriate model for persistence
        * */
       const jsonForm = formDataToJson(formData);
       const completedFormModel = Object.assign({}, JSON.parse(jsonForm), {
           subscriptionLength: this.state.subscriptionLength,
           vehicle: this.state.vehicle
       });

        /*
        * persist subscription - could use a then-able and ASSUME persistence, but will use props eval to validate
        * */
        this.props.actions.dispatch(()=> subscriptionActions.setSubscription(JSON.stringify(completedFormModel)))
    }
}

export default RequestForm;