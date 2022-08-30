import React, { useEffect } from 'react';
import { useProductsContext } from '../../containers/home/homeContext';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import HeaderComponent from '../common/HeaderComponent';
import { ProductWrapper } from '../common/commonStyle';
import ProductComponent from './ProductComponent';
import { IProduct } from '../../misc/interfaces';
import AddProduct from './AddProduct';

function HomeComponent(){

    const { products } = useProductsContext()

    useEffect(() =>{
        console.log("home component rerender");
    }, [])

    return(
        <div>
            <HeaderComponent />
            <Container>
                <Row>
                    <Col>
                        <AddProduct />
                        <ProductWrapper>
                            {
                                products ?
                                products.map((product:IProduct, index) => <ProductComponent key={index} product={product} /> )
                                : ""
                            }
                        </ProductWrapper>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default HomeComponent;