
import { render } from "@testing-library/react";
import Sales from "../index";
import {BrowserRouter as Router} from 'react-router-dom';
import * as request from "../../../misc/request";
import { act } from 'react-dom/test-utils';
import { salesMockResponse } from '../../../mock';

describe('<Sales />' , () =>{        
    it('should render and match the snapshot', async() => {
      const mock = jest.spyOn(request, "getSales")
      .mockResolvedValue(salesMockResponse);
     
        const {
          container: { firstChild },
        } = 
        render(
            <Router>
                <Sales />
            </Router>
        );
        await act(async () => {
          expect(firstChild).toMatchSnapshot();
          mock.mockRestore();
        });  
    }); 
    
    it('should render error modal and match shanpshot', async() => {
      const mock = jest.spyOn(request, "getSales")
      .mockRejectedValue(null);
     
        const {
          container: { firstChild },
        } = 
        render(
            <Router>
                <Sales />
            </Router>
        );
        await act(async () => {
          expect(firstChild).toMatchSnapshot();
          mock.mockRestore();
        });  
    });     
})