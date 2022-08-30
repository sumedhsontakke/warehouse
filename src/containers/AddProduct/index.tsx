import React, { FormEvent, FormEventHandler, memo, ReactElement, useEffect, useState } from "react"
import AddProductComponent from "../../components/add-product";
import SpinnerComponent from "../../components/common/SpinnerComponent";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HeaderComponent from '../../components/common/HeaderComponent';
import FallBackUI from "../../components/FallBackUI";
import { IProductSave, IArticle, IRequiredArticleState, IAlert,  } from "../../misc/interfaces";
import { getAllArticles, getArticleDetails, saveProduct } from "../../misc/request";
import { validate } from "../../misc/misc";

function AddProduct(){
    const [isLoading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [product, setProduct] = useState<string>("");
    const [alert, setAlert] = useState<IAlert>({
        show: false,
        message: "",
        variant: ""
    });
    const [allArticles, setAllArticles] = useState<IArticle[] | null>(null);

    const [requiredArticles, setRequiredArticles] = useState<IRequiredArticleState[]>([{
        id: "",
        amountRequired: 0
    }]);

    useEffect(() => {
        saveArticles();
    }, []);

    const saveArticles = async() =>{
        setLoading(true);
        const _allArticles = await getAllArticles();
        setLoading(false);
        if(_allArticles && _allArticles.status === 200 ){
            setAllArticles(_allArticles.data);
        } else {
            setError(true);
        }
    }


    const submit = async(e: FormEvent) =>{
        e.preventDefault();
        const validateResult= allArticles && validate(product, requiredArticles, allArticles);
        if(validateResult){
            setAlert({
                message: validateResult,
                show: true,
                variant: "danger"
            })
        } else {
            setAlert({...alert, show: false})
            const _product:IProductSave = {
                name: product,
                articles: requiredArticles
            } 
            setLoading(true);
            const saveProductResult = await saveProduct(_product);
            setLoading(false);
            if(saveProductResult && (saveProductResult.status === 200 || saveProductResult.status === 201)){
                setProduct("");
                setRequiredArticles([{
                    id: "",
                    amountRequired: 0
                }]);
                setAlert({
                    message: "Product added succesfully",
                    show: true,
                    variant: "success"
                })
            } else {
                setAlert({
                    message: "Something went wrong please try again",
                    show: true,
                    variant: "danger"
                })
            }

        }
    }

    const addRequiredArticle = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> | null, 
        inputType:string , 
        index: number,
        newArticle: IRequiredArticleState = {
            id: "",
            amountRequired: 0
        },

    ) => {
        const _requiredArticles = [...requiredArticles];
        if( e && inputType === "articleType"){
            _requiredArticles[index].id = e.target.value;
        } else if( e && inputType === "input"){
            _requiredArticles[index].amountRequired = Number(e.target.value);
        } else{
            _requiredArticles.push(newArticle)
        }
        setRequiredArticles(_requiredArticles);
    }

    return(
        <>
            { isLoading && <SpinnerComponent />}
            { error && <FallBackUI />}
            { !error &&
                <>
                    <HeaderComponent />
                    <Container>
                        <Row>
                            <Col>
                                <AddProductComponent 
                                    submit={submit}
                                    setProduct={(e: React.ChangeEvent<HTMLInputElement>) => setProduct(e.target.value)}
                                    addRequiredArticle={addRequiredArticle}
                                    allArticles={allArticles}
                                    requiredArticles={requiredArticles}
                                    alert={alert}
                                    setAlert={setAlert}
                                    product={product}
                                />
                            </Col>
                        </Row>   
                    </Container>     
                </>
            }
        </>
    )
}

export default memo(AddProduct);