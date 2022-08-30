
import { fireEvent, render, screen } from "@testing-library/react";
import ProductDetailsComponent from "../index";
import {BrowserRouter as Router} from 'react-router-dom';
import { productDetailsProps } from '../../../mock';

describe('<ProductDetailsComponent />' , () =>{        
    it('should render and match the snapshot', async() => {
        const {
          container: { firstChild },
        } = 
        render(
            <Router>
                <ProductDetailsComponent {...productDetailsProps} />
            </Router>
        );

        expect(firstChild).toMatchSnapshot();
    });  

    it('If AmountRequired more that stock, should show error', async() => {
        const _productDetailsProps = {...productDetailsProps, articles: [{
            "id": "0517f083-0e15-4876-8d1f-6fa45900431c",
            "amountRequired": 2,
            "amountInStock": 1,
            "name": "article 1"
        }]};
        render(
            <Router>
                <ProductDetailsComponent {..._productDetailsProps} />
            </Router>
        );

        expect(screen.getByText("Articles not available")).toBeInTheDocument();
    }); 
 
})