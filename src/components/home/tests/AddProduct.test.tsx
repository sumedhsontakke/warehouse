
import { render, screen } from "@testing-library/react";
import AddProduct, { AddProductWrapper } from "../AddProduct";
import { BrowserRouter as Router } from 'react-router-dom';

describe("AddProduct", () => {
    it("Should render and match snapshot", () => {
        const { container } = render(
            <Router>
                <AddProduct />
            </Router>
        );
        expect(container).toMatchSnapshot();
    });

    it("should have Add Product", () => {
        render(
            <Router>
                <AddProduct />
            </Router>
        );
        expect(screen.getByText("Add Product")).toBeInTheDocument();
    });
});

describe('<AddProductWrapper />', () => {
    it('should render an <div> tag', () => {
        const { container } = render(<AddProductWrapper />);
        expect(container.querySelector('div')).not.toBeNull();
    });

    it('should have a class attribute', () => {
        const { container } = render(<AddProductWrapper />);
        const _container = container.querySelector('div')
        expect(_container && _container.hasAttribute('class')).toBe(true);
    });

    it('should adopt a valid attribute', () => {
        const id = 'test';
        const { container } = render(<AddProductWrapper id={id} />);
        const _container = container.querySelector('div')
        expect(_container && _container.id).toEqual(id);
    });
});