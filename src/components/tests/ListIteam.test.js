import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import ListIteam from '../ListIteam';


const defaultProps = {
    data: {
        name:'xyz',
        marks:'10',
    }
    
};

let wrapped = shallow(<ListIteam data={defaultProps.data}></ListIteam>);
describe('ListIteam', () => {
    it('render component without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ListIteam { ...defaultProps }></ListIteam>, div);
    });
  it('should render the name correctly', () => {   
    expect(wrapped.find('.name-container').text()).toEqual(defaultProps.data.name);
  });
  it('should render the mark correctly', () => { 
    expect(wrapped.find('.marks-container').text()).toEqual(defaultProps.data.marks);
  });
});