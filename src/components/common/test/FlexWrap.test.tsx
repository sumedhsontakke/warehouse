
import { render, screen } from "@testing-library/react";
import {FlexWrapStyle} from "../FlexWrap";

describe('<FlexWrapStyle />', () => {
    it('should render an <div> tag', () => {
        const { container } = render(<FlexWrapStyle children={"test"} />);
        expect(container.querySelector('div')).not.toBeNull();
    });

    it('should have a class attribute', () => {
        const { container } = render(<FlexWrapStyle children={"test"} />);
        const _container = container.querySelector('div')
        expect(_container && _container.hasAttribute('class')).toBe(true);
    });

    it('should adopt a valid attribute', () => {
        const id = 'test';
        const { container } = render(<FlexWrapStyle id={id} children={"test"} />);
        const _container = container.querySelector('div')
        expect(_container && _container.id).toEqual(id);
    });
});