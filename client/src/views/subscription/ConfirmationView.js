import React, {Component} from 'react';
import Confirmation from '../../components/subscription/Confirmation';
import navigation from "../../utilities/navigation";
import constants from '../../constants';
import connectedStoreContainer from '../../store/connectedStoreContainer';
import subscriptionPropTypes from '../../store/subscriptionPropTypes';


class ConfirmationView extends Component{

    static propTypes = subscriptionPropTypes;

    constructor(props){
        super(props);
    }

    componentDidMount() {
        if(!this.props.subscriptionStore.subscriptionLengthList.length)
            navigation.go(constants.ROUTES.HOME);
    }

    render(){
        if(!this.props.subscriptionStore.subscriptionLengthList.length)
            return null;

        return (
            <Confirmation subscription={this.props.subscriptionStore.subscription} />
        );
    }
}

export default connectedStoreContainer(ConfirmationView);