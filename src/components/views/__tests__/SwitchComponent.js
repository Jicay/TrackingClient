import React from 'react';
import SwitchComponent from "../SwitchComponent";

describe('SwitchComponent', () => {
    describe('tick', () =>
    {
        it("should correctly execute", () => {
            const switchComponent = new SwitchComponent();
            document.getElementById = jest.fn();
            document.getElementById.mockReturnValue({clientHeight: 100, clientWidth: 450});
            switchComponent.props = {
                page: 'home',
                sessionId: 45,
                sendMousePosition: jest.fn()
            }
            switchComponent.state = {
                x: 54,
                y: 50
            }

            switchComponent.tick();

            expect(switchComponent.props.sendMousePosition).toHaveBeenCalledWith(0.12, 0.5, 'home', 45);
        })
    })

    describe('_onMouseMove', () =>
    {
        it("should update state", () => {
            const switchComponent = new SwitchComponent();
            switchComponent.setState = jest.fn();

            const event = {
                nativeEvent: {
                    x: 75,
                    y: 95
                }
            };

            switchComponent._onMouseMove(event);

            expect(switchComponent.setState).toHaveBeenCalledWith({x: 75, y: 95});
        })
    })
})