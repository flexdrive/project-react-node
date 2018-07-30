import  React from 'react';
import {subscriptionMock} from "../../mocks/subscription.mock";
import Confirmation from '../../../src/components/subscription/Confirmation';


describe('Subscription Confirmation Component test suite', () => {
    let props;

    beforeEach(() =>{
        props = {subscription: subscriptionMock};
    });

    afterEach(() => {
        props = null;
    });

    describe('Unit Testing: Render', () => {
        test('evalutate render and props', () => {
            const component = new Confirmation(props);

            React.isValidElement(component);
            expect(component.props.children[2].props.id).toEqual('subscription-summary');
        });
    });

    describe('Component Testing: Render', () => {
        test('should render component', () => {
            const element = shallow(<Confirmation {...props} />);

            expect(element.find('#subscription-container').length).toBe(1);  //parent div element
            expect(element.find('.vehicle-image').length).toBe(1);           //image element
            expect(element).toMatchSnapshot();
        });
    });
});
