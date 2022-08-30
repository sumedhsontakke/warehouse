
import { render, screen, waitFor } from "@testing-library/react";
import AddProduct from "../index";
import {BrowserRouter as Router} from 'react-router-dom';
import * as request from "../../../misc/request";
import { act, } from 'react-dom/test-utils';
import { articleMockResponse } from '../../../mock';

describe('<AddProduct />' , () =>{        
    it('should render and match the snapshot', async() => {
      const mock = jest.spyOn(request, "getAllArticles")
      .mockResolvedValue(articleMockResponse);
     
        const {
          container: { firstChild },
        } = 
        render(
            <Router>
                <AddProduct />
            </Router>
        );
        await act(async () => {
          expect(firstChild).toMatchSnapshot();
          mock.mockRestore();
        });  
    }); 
    
    it('should render error modal and match shanpshot', async() => {
      const mock = jest.spyOn(request, "getAllArticles")
      .mockRejectedValue(null);
     
        const {
          container: { firstChild },
        } = 
        render(
            <Router>
                <AddProduct />
            </Router>
        );
        act(() => {
          expect(firstChild).toMatchSnapshot();
          mock.mockRestore();
        });  
    });    
})