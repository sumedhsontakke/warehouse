
import { render, screen } from "@testing-library/react";
import ProductComponent from "../ProductComponent";
import { BrowserRouter as Router } from 'react-router-dom';
import { product } from "../../../mock";

describe("ProductComponent", () => {
    it("Should render and match snapshot", () => {
        const { container } = render(
            <Router>
                <ProductComponent product={product[0]} />
            </Router>
        );
        expect(container).toMatchSnapshot();
    });

    it("should have props content", () => {
        render(
            <Router>
                <ProductComponent  product={product[0]} />
            </Router>
        );
        expect(screen.getByText(product[0].name)).toBeInTheDocument();
    });
});