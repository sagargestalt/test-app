import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Header from '../Header';


const defaultProps = {
    maintitle:"Dashbrod",
    subtitile:"Mobile UX/UI Design course"
    
};

let wrapped = shallow(<Header maintitle={ defaultProps.maintitle } subtitile={ defaultProps.subtitile }></Header>);
describe('Header', () => {
    it('render component without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Header { ...defaultProps }></Header>, div);
    });
  it('should render the main title correctly', () => {   
    expect(wrapped.find('#main-title').text()).toEqual(defaultProps.maintitle);
  });
  it('should render the subtitle correctly', () => { 
    expect(wrapped.find('#sub-title').text()).toEqual(defaultProps.subtitile);
  });
});