
import { render, screen } from "@testing-library/react";
import HeaderComponent from "../HeaderComponent";
import { BrowserRouter as Router } from 'react-router-dom';

describe("HeaderComponent", () => {
    it("Should render and match snapshot", () => {
        const { container } = render(
            <Router>
                <HeaderComponent  />
            </Router>
        );
        expect(container).toMatchSnapshot();
    });

    it("should have Nav component", () => {
        render(
            <Router>
                <HeaderComponent  />
            </Router>
        );
        expect(screen.getByText("Articles")).toBeInTheDocument();
    });

    it("should have logo component", () => {
        render(
            <Router>
                <HeaderComponent  />
            </Router>
        );
        expect(screen.getByAltText("logo")).toBeInTheDocument();
    });    
});