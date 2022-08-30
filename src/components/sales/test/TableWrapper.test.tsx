
import { render, screen } from "@testing-library/react";
import { TableWrapper } from "../TableWrapper";

describe('<TableWrapper />', () => {
    it('should render an <div> tag', () => {
        const { container } = render(<TableWrapper />);
        expect(container.querySelector('div')).not.toBeNull();
    });

    it('should have a class attribute', () => {
        const { container } = render(<TableWrapper />);
        const _container = container.querySelector('div')
        expect(_container && _container.hasAttribute('class')).toBe(true);
    });

    it('should adopt a valid attribute', () => {
        const id = 'test';
        const { container } = render(<TableWrapper id={id} />);
        const _container = container.querySelector('div')
        expect(_container && _container.id).toEqual(id);
    });
});