import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure  } from 'enzyme';
import Container from '../Container';
import fetch  from '../__mock__/mock_student-api'

jest.mock("../__mock__/mock_student-api");

global.fetch = fetch;
 
configure({adapter: new Adapter()});

describe('Container', () => {
    it('render Input without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Container />, div);
    });
 
    describe('ToDoList component', () => {
        describe('when rendered', () => {
          it('should fetch a list of students', () => {
            const fetchSpy = jest.spyOn(window, 'fetch');
            const StudentListInstance = shallow(
              <Container/>
            );
            expect(fetchSpy).toBeCalled();
          });
        });
      });
});