import { useEffect, useState } from 'react';
import { IProduct } from '../../misc/interfaces';
import { getProductList } from "../../misc/request";
import { ProductsContext } from "./homeContext";
import FallBackUI from '../../components/FallBackUI';
import HomeComponent from '../../components/home';
import SpinnerComponent from '../../components/common/SpinnerComponent';

function Home(){

    const [products, setProducts] = useState<IProduct[] | null>(null);
    const [isSpinner, setSpinner] = useState<Boolean>(false);
    const [error, setError] = useState<Boolean>(false);
    
    useEffect(() =>{
        console.log("home container rerender", products);
        if(!products)
            saveProductList(1); 
    }, [])

    const saveProductList = (retry: number) => { 
        setSpinner(true);
        if(retry <= 2){
            try{
                const result = getProductList();
                result.then(resp =>{ 
                    if(resp.status === 200){
                        setProducts(resp.data);
                    }
                    setSpinner(false);
                })
                .catch((error) =>{
                    setSpinner(false);
                    saveProductList(retry + 1);
                })
            } catch (e){
                console.log("Failed while fetching product list");
                setSpinner(false);
                retry < 2 && saveProductList(retry + 1);
            }
        } else {
            setSpinner(false);
            setError(true);
        }
    }

    return(
        <div>
            <ProductsContext.Provider value={{products, setProducts, saveProductList}}>
                { !error && <HomeComponent /> }
                { isSpinner && <SpinnerComponent /> }
                { error && <FallBackUI /> }
            </ProductsContext.Provider>
        </div>
    )
}

export default Home;