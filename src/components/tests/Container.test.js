import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure  } from 'enzyme';
import Container from '../Container';
import fetch  from '../__mock__/mock_student-api'


global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(...fetch),
  })
);




describe('Container', () => {
    it('render container without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Container />, div);
    });
 
});


