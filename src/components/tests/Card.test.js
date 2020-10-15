import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import CardLayout from '../Card';


const defaultProps = {
        title:'xyz',
        metainfo:'student',
};

let wrapped = shallow(<CardLayout title={ defaultProps.title } metainfo={ defaultProps.metainfo }></CardLayout>);
describe('ListIteam', () => {
    it('render Input without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<CardLayout { ...defaultProps }></CardLayout>, div);
    });
  it('should render the title correctly', () => {   
    expect(wrapped.find('.info-title').text()).toEqual(defaultProps.title);
  });
  it('should render the metainfo correctly', () => { 
    expect(wrapped.find('.info-metainfo').text()).toEqual(defaultProps.metainfo);
  });
});