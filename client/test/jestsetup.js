import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

/*
* React 16 Enzyme adapter
* */
Enzyme.configure({ adapter: new Adapter() });

/*
*  Add Enzyme functions to global scope to use
*  without need to import
* */
global.shallow = shallow;
global.render = render;
global.mount = mount;
