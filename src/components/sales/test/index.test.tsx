
import { render, screen } from "@testing-library/react";
import SalesComponent from "../index";
import {BrowserRouter as Router} from 'react-router-dom';
import * as content from "../../../containers/home/homeContext";
import { act } from 'react-dom/test-utils';
import { SalesProps } from '../../../mock';

describe('<SalesComponent />' , () =>{        
    it('should render and match the snapshot', async() => {
        const {
          container: { firstChild },
        } = 
        render(
            <Router>
                <SalesComponent {...SalesProps} />
            </Router>
        );
        await act(async () => {
          expect(firstChild).toMatchSnapshot();
        });  
    });  

    it('should render sell product name', async() => {
          const {
            container: { firstChild },
          } = 
          render(
              <Router>
                  <SalesComponent {...SalesProps} />
              </Router>
          );
          await act(async () => {
            expect(await screen.findByText(SalesProps.salesDetail[0].name)).toBeInTheDocument();
          });  
      });  
})