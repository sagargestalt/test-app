import React from 'react';
import { shallow } from 'enzyme';
import App from './App'




describe("App", () => {
    it("renders successfuly", () => {
        shallow(<App />);
    });

    it("renders all child components successfuly", () => {
        const wrapper = shallow(<App/>);
        expect(wrapper.find("NavbarTop").length).toEqual(1);
        expect(wrapper.find("Header").length).toEqual(1);
        expect(wrapper.find("MainContainer").length).toEqual(1);
    });
});
