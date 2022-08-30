
import { render } from "@testing-library/react";
import ProductDetails from "../index";
import {BrowserRouter as Router} from 'react-router-dom';
import { act } from 'react-dom/test-utils';

describe('<ProductDetails />' , () =>{        
    it('should render and match the snapshot', async() => {
        const {
          container: { firstChild },
        } = 
        render(
            <Router>
                <ProductDetails />
            </Router>
        );
        await act(async () => {
          expect(firstChild).toMatchSnapshot();
        });  
    });  
})