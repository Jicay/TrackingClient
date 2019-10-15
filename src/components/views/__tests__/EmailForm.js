import React from 'react';
import renderer from 'react-test-renderer';
import EmailForm from "../EmailForm";

it('renders correctly', () => {
    const tree = renderer
        .create(<EmailForm/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});