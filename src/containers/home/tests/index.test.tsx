
import { render } from "@testing-library/react";
import Home from "../index";
import {BrowserRouter as Router} from 'react-router-dom';
import * as request from "../../../misc/request";
import { AxiosResponse } from "axios";
import { act } from 'react-dom/test-utils';
import { mockresponse } from '../../../mock';

describe('<HomeContainer />' , () =>{        
    it('should render and match the snapshot', async() => {
      const mock = jest.spyOn(request, "getProductList")
      .mockResolvedValue(mockresponse);
     
        const {
          container: { firstChild },
        } = 
        render(
            <Router>
                <Home />
            </Router>
        );
        await act(async () => {
          expect(firstChild).toMatchSnapshot();
          mock.mockRestore();
        });  
    });  
})