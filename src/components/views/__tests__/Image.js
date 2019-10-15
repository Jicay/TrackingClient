import React from 'react';
import renderer from 'react-test-renderer';
import {MemoryRouter} from "react-router";
import Image from "../Image";

it('renders correctly', () => {
    const tree = renderer
        .create(<MemoryRouter><Image image='skfjlsf/psdofispdofi'/></MemoryRouter>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});