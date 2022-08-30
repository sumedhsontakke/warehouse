
import { render, screen } from "@testing-library/react";
import CustomButton from "../Button";

describe('<CustomButton />', () => {
    it('should render an <button> tag', () => {
        const { container } = render(<CustomButton children={"test"} />);
        expect(container.querySelector('button')).not.toBeNull();
    });

    it('should have a class attribute', () => {
        const { container } = render(<CustomButton children={"test"} />);
        const _container = container.querySelector('button')
        expect(_container && _container.hasAttribute('class')).toBe(true);
    });

});