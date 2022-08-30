import { memo } from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CustomButtons from "../common/Button";
import Text from "../common/Text";
import HeaderComponent from '../common/HeaderComponent';
import styled from "styled-components";

export const ErrorBox = styled.div`
    width: 400px;
    border: 2px solid #e7e7e7;
    padding: 25px;
    margin: 0 auto;
    margin-top: 90px;
`;

function FallBackUI(){
    return(
        <>
            <HeaderComponent />
            <Container>
                <Row>
                    <Col>
                        <ErrorBox>
                            <Text fontWeight={600} margin={"0 0 20px 0"} fontSize={'18px'}>Something went wrong</Text>
                            <Text margin={"0 0 30px 0"}>We are facing some issue, Please retry after sometime or refresh page</Text>
                            <CustomButtons type={"primary"} onClick={(e) => { window.location.reload();}}>Refresh</CustomButtons>
                        </ErrorBox>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default memo(FallBackUI);