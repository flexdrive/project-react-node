import {browserHistory} from 'react-router';

const navigation = {
    go(location){
        browserHistory.push(location);
    }
};

export default navigation;