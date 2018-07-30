import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import actions from './index'


const connectedStoreContainer = (component, additionalContextTypes = {}, additionalActions) => {
    const mapStateToProps = (state) => {
        return Object.assign({}, state);
    }

    const mapDispatchToProps = (dispatch) => {
        return {
            actions: bindActionCreators(Object.assign({}, actions, additionalActions), dispatch),
        };
    }

    const connectedComponent = component;

    connectedComponent.contextTypes = {
        store: PropTypes.object,
        ...additionalContextTypes,
    };

    return connect(mapStateToProps, mapDispatchToProps)(connectedComponent);
};

export default connectedStoreContainer;