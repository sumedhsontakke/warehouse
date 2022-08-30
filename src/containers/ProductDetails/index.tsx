import { memo, useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { IArticle, IArticleDetails, IProductDetailsWithArticles } from "../../misc/interfaces";
import { getArticleDetails, getProductDetails, salesProduct, saleArticles } from "../../misc/request";
import SpinnerComponent from '../../components/common/SpinnerComponent';
import FallBackUI from "../../components/FallBackUI";
import ProductDetailsComponent from "../../components/ProductDetails";
import CommonModal from "../../components/common/CommonModal";

function ProductDetails(){
    const params = useParams();
    const navigate = useNavigate();
    const [isSpinner, setSpinner] = useState<Boolean>(false);
    const [productDetailsWithArticles, setProductDetailsWithArticles] = useState<IProductDetailsWithArticles | null>(null);
    const [allArticles, setAllArticles] = useState<IArticle[] | null>(null);
    const [error, setError] = useState<boolean>(false);
    const [showModal, setShowModal] = useState<boolean>(false);
    const noOfRetry:number = 5;

    useEffect(()=> {
        if(params && params.productId){
            saveProductDetails(params.productId);
        } else {
            navigate("/");
        }
    }, [])

    const saveProductDetails = (productId:string) => {
        if(!productDetailsWithArticles){
            try{
                setSpinner(true);
                const result = getProductDetails(productId);
                result.then(resp =>{
                    if(resp.status === 200){
                        setSpinner(false);
                        saveArticleDetails(resp.data);
                    } else {
                        setSpinner(false);
                        setError(true);
                    }
                })
                .catch((error) =>{
                    setSpinner(false);
                    setError(true);
                    console.log("Failed while fetching product list");
                })
            } catch (e){
                console.log("Failed while fetching product list");
                setError(true);
                setSpinner(false);
            }
        }
    }

    const saveArticleDetails = async(product: IProductDetailsWithArticles) => {
        if(product && product.articles){
            if(allArticles){
                setProductDetails(product, allArticles);
            } else {console.log("in save article details");
                setSpinner(true);
                const result = await getArticleDetails().catch((err) => err);
                console.log(result, isSpinner);
                setSpinner(false);
                if(result && result.status === 200){
                    setAllArticles(result.data);
                    setError(false);
                    // {...article, amountInStock: result.data.amountInStock, name: result.data.name}
                }else{
                    setError(true);
                }
                setProductDetails(product, result.data);
            }
        }
    }

    const setProductDetails = (product:IProductDetailsWithArticles , allArticles: IArticle[]) => {
        const _product = product;
        _product.articles.map((productArticle, index) =>{
            const filteredArticle = allArticles.filter(article => article.id === productArticle.id);
            _product.articles[index] = {...productArticle, amountInStock: filteredArticle[0].amountInStock, name: filteredArticle[0].name }
        });
        setProductDetailsWithArticles(_product);
        console.log(_product, "productArticle");
    }

    const saleProduct = async(id: string, articles:IArticleDetails[], retry: number = 1) =>{
        if(retry <= noOfRetry){
            setSpinner(true);
            await salesProduct({
                productId: id,
                amountSold: 1
            })
            .then((resp) =>{
                setSpinner(false);
                setError(false);
                saleAricles(articles, 1);
            })
            .catch((err)=> {
                saleProduct(id, articles, retry + 1);
            });
        } else {
            console.log("completed retry");
            setSpinner(false);
            setError(true);
        }
    }

    const saleAricles = async(articles:IArticleDetails[] , retry: number) =>{
        if(retry <= noOfRetry){
            setSpinner(true);
            const _articleBody:IArticle[] = 
            articles.map((article:IArticleDetails) =>{
                return{
                   id: article.id,
                   name: article.name,
                   amountToSubtract: article.amountRequired
                }
            }); console.log(_articleBody);
            await saleArticles(_articleBody)
            .then((resp) =>{
                setSpinner(false);
                setError(false);
                setShowModal(true);
            })
            .catch((err)=> {
                saleAricles(articles, retry + 1);
            });
        } else {
            console.log("completed retry");
            setSpinner(false);
            setError(true);
        }
    }

    return(
        <div>
            { isSpinner && <SpinnerComponent /> }
            { error && <FallBackUI />}
            { !error && productDetailsWithArticles && 
                <ProductDetailsComponent {...productDetailsWithArticles} saleProduct={saleProduct} />
            }
            <CommonModal
                showModal={showModal} 
                setShowModal={()=> setShowModal(!showModal)}
                handleClose={()=> { navigate(`/`) }} 
                handleSubmit={()=> { navigate(`/`)  }}
                headingText={"Sell Status"}
                bodyText={"Sell sucessfully done!"}
                closeButtonText={"close"}
                submitButtonText={"Okay"}
            />
        </div>
    )
}

export default memo(ProductDetails);