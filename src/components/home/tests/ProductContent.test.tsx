
import { render, screen } from "@testing-library/react";
import AddProduct, { AddProductWrapper } from "../AddProduct";
import { ProductContent } from "../ProductContent";

describe('<ProductContent />', () => {
    it('should render an <div> tag', () => {
        const { container } = render(<ProductContent />);
        expect(container.querySelector('div')).not.toBeNull();
    });

    it('should have a class attribute', () => {
        const { container } = render(<ProductContent />);
        const _container = container.querySelector('div')
        expect(_container && _container.hasAttribute('class')).toBe(true);
    });

    it('should adopt a valid attribute', () => {
        const id = 'test';
        const { container } = render(<ProductContent id={id} />);
        const _container = container.querySelector('div')
        expect(_container && _container.id).toEqual(id);
    });
});