import { memo } from "react"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Header } from "./commonStyle";

import LogoComponent from './LogoComponent'
import NavComponent from './Nav';

function HeaderComponent(){
    return(
        <Header>
            <Container>
                <Row>
                    <Col>
                        <LogoComponent />
                    </Col>
                    <Col>
                        <NavComponent />
                    </Col>
                </Row>
            </Container> 
        </Header>       
    );
};

export default memo(HeaderComponent);