import React from 'react';
import renderer from 'react-test-renderer';
import Home from "../Home";
import {MemoryRouter} from "react-router";

it('renders correctly', () => {
    const tree = renderer
        .create(<MemoryRouter><Home onLoad={jest.fn()}/></MemoryRouter>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});