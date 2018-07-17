import React, {Component} from 'react';
import RequestForm from '../../components/subscription/RequestForm';
import connectedStoreContainer from '../../store/connectedStoreContainer';
import subscriptionPropTypes from '../../store/subscriptionPropTypes';
import navigation from '../../utilities/navigation';
import constants from '../../constants';


class RequestFormView extends Component{

    static propTypes = subscriptionPropTypes;

    constructor(props){
        super(props);
    }

    componentDidMount(){
        if(!this.props.subscriptionStore.subscriptionLengthList.length)
            navigation.go(constants.ROUTES.HOME);
    }

    render(){
        if(!this.props.subscriptionStore.subscriptionLengthList.length)
            return null;

        return (
            <RequestForm {...this.props}/>
        );
    }
}


export default connectedStoreContainer(RequestFormView);