
import { render, screen } from "@testing-library/react";
import HomeComponent from "../index";
import {BrowserRouter as Router} from 'react-router-dom';
import * as content from "../../../containers/home/homeContext";
import { act } from 'react-dom/test-utils';
import { mockresponse, product } from '../../../mock';

describe('<HomeComponent />' , () =>{        
    it('should render and match the snapshot', async() => {
      const mock = jest.spyOn(content, "useProductsContext")
      .mockReturnValue({products: product, setProducts : ()=> {}, saveProductList : ()=> {}});
        const {
          container: { firstChild },
        } = 
        render(
            <Router>
                <HomeComponent />
            </Router>
        );
        await act(async () => {
          expect(firstChild).toMatchSnapshot();
          mock.mockRestore();
        });  
    });  

    it('should render product name', async() => {
        const mock = jest.spyOn(content, "useProductsContext")
        .mockReturnValue({products: product, setProducts : ()=> {}, saveProductList : ()=> {}});
       
          const {
            container: { firstChild },
          } = 
          render(
              <Router>
                  <HomeComponent />
              </Router>
          );
          await act(async () => {
            expect(await screen.findByText(product[0].name)).toBeInTheDocument();
            mock.mockRestore();
          });  
      });  
})