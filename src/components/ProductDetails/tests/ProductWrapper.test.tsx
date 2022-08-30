
import { render, screen } from "@testing-library/react";
import ProductWrappeer from "../ProductWrapper";

describe('<ProductWrappeer />', () => {
    it('should render an <div> tag', () => {
        const { container } = render(<ProductWrappeer />);
        expect(container.querySelector('div')).not.toBeNull();
    });

    it('should have a class attribute', () => {
        const { container } = render(<ProductWrappeer />);
        const _container = container.querySelector('div')
        expect(_container && _container.hasAttribute('class')).toBe(true);
    });

    it('should adopt a valid attribute', () => {
        const id = 'test';
        const { container } = render(<ProductWrappeer id={id} />);
        const _container = container.querySelector('div')
        expect(_container && _container.id).toEqual(id);
    });
});