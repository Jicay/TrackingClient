import React from 'react';
import renderer from 'react-test-renderer';
import {MemoryRouter} from "react-router";
import Image from "../Image";
import ImageForm from "../ImageForm";

it('renders correctly', () => {
    const history = {
        location: '/image'
    };

    const match = {
        params: {
            imageUrl: '45645-qddfsfd8754fs'
        }
    };

    const tree = renderer
        .create(<MemoryRouter><ImageForm history={history} match={match} onLoad={jest.fn()}/></MemoryRouter>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});