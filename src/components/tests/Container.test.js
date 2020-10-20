import React from "react";
import { mount, render } from "enzyme";
import Container from '../Container';
import fetchdata  from '../__mock__/mock_student-api'


global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(fetchdata),
  })
);

describe("Container", () => {
  it("renders successfuly", () => {
    mount(<Container />);
  });

  it('it make two api calls initally', async () => {
    const fakeResponse = fetchdata;
    const mockFetch = Promise.resolve({json: () => Promise.resolve(fakeResponse)});
    const mockedFetch = await jest.spyOn(window, 'fetch').mockImplementationOnce(() => mockFetch )
    expect(mockedFetch).toHaveBeenCalledTimes(2);
});
  it("renders all child components successfuly", () => {
    const wrapper = mount(<Container/>);
    expect(wrapper.find("List").length).toEqual(1);
    expect(wrapper.find("CardLayoutContainer").length).toEqual(1);
    expect(wrapper.find("Header").length).toEqual(1);
});
});


