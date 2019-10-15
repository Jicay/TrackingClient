import React from 'react';
import renderer from 'react-test-renderer';
import Congrats from "../Congrats";
import {MemoryRouter} from "react-router";

it('renders correctly', () => {
    const tree = renderer
        .create(<MemoryRouter><Congrats onLoad={jest.fn()}/></MemoryRouter>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});