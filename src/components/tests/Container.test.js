import React from "react";
import { mount, render } from "enzyme";
import Container from '../Container';
import fetch  from '../__mock__/mock_student-api'


global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(...fetch),
  })
);

describe("Container", () => {
  it("renders successfuly", () => {
    mount(<Container />);
  });

  it('it make two api calls initally', async () => {
    const fakeResponse = fetch;
    const mockFetch = Promise.resolve({json: () => Promise.resolve(fakeResponse)});
    const mockedFetch = jest.spyOn(window, 'fetch').mockImplementationOnce(() => mockFetch )
    expect(mockedFetch).toHaveBeenCalledTimes(2);
})
});


