import React from 'react';
import renderer from 'react-test-renderer';
import EmailForm from "../EmailForm";

describe("EmailForm", () => {

    describe("Render", () => {
        it('renders correctly', () => {
            const tree = renderer
                .create(<EmailForm/>)
                .toJSON();
            expect(tree).toMatchSnapshot();
        });
    })

    describe("handleChange", () => {
        it('should change page', () => {
            const emailForm = new EmailForm();
            emailForm.props = {
                history: {
                    push: jest.fn()
                }
            }

            const event = {
                preventDefault: jest.fn()
            }

            emailForm.handleSubmit(event);

            expect(emailForm.props.history.push).toHaveBeenCalledWith('/congrats');
            expect(event.preventDefault).toHaveBeenCalled();
        })
    })
})