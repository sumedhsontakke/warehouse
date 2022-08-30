import { memo } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HeaderComponent from '../common/HeaderComponent';
import { IProductDetailsProps, } from "../../misc/interfaces";
import ProductWrapper from "./ProductWrapper";
import Text from "../common/Text";
import FlexWrap from "../common/FlexWrap";
import CustomeButton from "../common/Button";

function ProductDetailsComponent(props: IProductDetailsProps){ 
    let isArticlesAreNotAvailable = null;
    if(props.articles){
        isArticlesAreNotAvailable =
        props.articles.filter(article => { 
            if(article.amountInStock || article.amountInStock === 0){ 
                return (article.amountInStock < article.amountRequired)
            }
            return false;
        });
    }

    return(
        <>
            <HeaderComponent />
            <Container>
                <Row>
                    <Col>
                        <ProductWrapper>
                            <Text fontSize={"20px"} fontWeight={600}>Product Details</Text>
                            <Text fontSize={"16px"} margin={"15px 0 15px 0"}>{props.name}</Text>
                            <Text fontSize={"18px"} fontWeight={600} margin={"15px 0"}>Parts</Text>
                            <Container>
                                <Row>
                                    {
                                        props.articles.map((article, index) => 
                                            <div key={index}>
                                                <Col md="12"><Text fontSize={"18px"} fontWeight={600}>{article.name}</Text></Col>
                                                <Col md="6">
                                                    <FlexWrap><Text margin={"0px 15px 10px 0"} fontWeight={600}>Required quantity:{` `} </Text>{article.amountRequired}</FlexWrap>
                                                </Col>
                                                <Col md="6">
                                                    <FlexWrap>
                                                        <Text margin={"0px 15px 10px 0"} fontWeight={600}>Available:{` `} </Text>{article.amountInStock}</FlexWrap>
                                                </Col>
                                            </div>
                                        )
                                    }
                                </Row>
                                <Row>
                                    <Col>
                                        <CustomeButton disabled={isArticlesAreNotAvailable && isArticlesAreNotAvailable?.length > 0} onClick={() => props.saleProduct(props.id, props.articles)} width="250px" margin={"25px 0 0 0"} type={"primary"}>Sell</CustomeButton>
                                    </Col>
                                    {
                                        isArticlesAreNotAvailable && isArticlesAreNotAvailable?.length > 0 ? 
                                        <Text margin={"15px 0 15px 0"} color="red">Articles not available</Text> : ""
                                    }
                                </Row>
                            </Container>
                        </ProductWrapper>
                    </Col>
                </Row>
            </Container>
        </>        
    )
}

export default memo(ProductDetailsComponent);