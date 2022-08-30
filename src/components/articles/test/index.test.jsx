
import { fireEvent, render, screen } from "@testing-library/react";
import ArticlesComponent from "../index";
import {BrowserRouter as Router} from 'react-router-dom';
import { articleComponentProps } from '../../../mock';

describe('<ArticlesComponent />' , () =>{        
    it('should render and match the snapshot', async() => {
        const {
          container: { firstChild },
        } = 
        render(
            <Router>
                <ArticlesComponent {...articleComponentProps} />
            </Router>
        );

        expect(firstChild).toMatchSnapshot();
    });   
})