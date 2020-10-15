import React from 'react';
import { shallow } from 'enzyme';
import List from '../List'



const defaultProps = {
    changeOrder: jest.fn(),
    data:[]
};

describe('BaseListItem tests', () => {
    const shallowTree = shallow(<List { ...defaultProps } />);

    it('should call the function provided from props', () => {
        shallowTree.find("#dropdown-menu-align-right").simulate("change", {
            target: { value: "asc", selectedIndex: 1 }
        });
    });

});
