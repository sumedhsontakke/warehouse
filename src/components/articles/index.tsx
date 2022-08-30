import React, { useEffect } from 'react';
import { useProductsContext } from '../../containers/home/homeContext';
import { IArticlesProps } from "../../misc/interfaces";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AddProduct from '../home/AddProduct';
import HeaderComponent from '../common/HeaderComponent';
import { ProductWrapper } from '../common/commonStyle';
import ArticleComponent from './ArticleComponent';

function ArticlesComponent(props: IArticlesProps){
    const setArticles = (value: string, index: number) => {
        if(props.articles){
            const _articles = [...props.articles];
            _articles[index].inputValue = Number(value);
            props.setArticles(_articles);
        }
    }
    return(
        <>
            <HeaderComponent />
            <Container>
                <Row>
                    <Col>
                        <ProductWrapper>
                            {
                                props.articles &&
                                props.articles.map((article, index) =>
                                    <ArticleComponent 
                                        article={article} 
                                        updateArticle={props.updateArticle} 
                                        setArticles={setArticles}
                                        articleIndex={index}
                                    />
                                )
                            }
                        </ProductWrapper>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ArticlesComponent;