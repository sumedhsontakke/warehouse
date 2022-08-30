
import { useEffect, useState } from 'react';
import { IArticle, IArticleState } from '../../misc/interfaces';
import { getAllArticles, updateArticleById } from "../../misc/request";
import FallBackUI from '../../components/FallBackUI';
import HomeComponent from '../../components/home';
import SpinnerComponent from '../../components/common/SpinnerComponent';
import ArticlesComponent from '../../components/articles';

function ArticlesContainer(){
    const [articles, setArticles] = useState<IArticleState[] | null>(null);
    const [isSpinner, setSpinner] = useState<Boolean>(false);
    const [error, setError] = useState<Boolean>(false);

    useEffect(() =>{
        if(!articles)
            saveArticlesList(1); 
    }, [])

    const saveArticlesList = async(retry: number) => {
        setSpinner(true);
        if(retry <= 2){
            try{
                const result = await getAllArticles();
                if(result.status === 200 || result.status === 2001){
                    const _articles = result.data.map((data:IArticle) =>{
                        return { ...data, inputValue: "" }
                    })
                    setArticles(_articles);
                    setSpinner(false);
                } else {
                    setSpinner(false);
                    saveArticlesList(retry + 1);
                }

            } catch (e){
                console.log("Failed while fetching product list");
                setSpinner(false);
                retry < 2 && saveArticlesList(retry + 1);
            }
        } else {
            setSpinner(false);
            setError(true);
        }
    }   
    
    const updateArticle = async(index:number) => {
        if(articles){
            setSpinner(true);
            const result = await updateArticleById(
                articles[index].id, 
                {
                    name: articles[index].name,
                    amountInStock: Number(articles[index].inputValue) + Number(articles[index].amountInStock)
                }
            ); 
            if(result && (result.status === 200 || result.status === 201)){
                setSpinner(false);
                saveArticlesList(1);
            } else {
                setSpinner(false);
                setError(true);
            }
        }
    }

    return(
        <div>
            { 
                !error && 
                <ArticlesComponent 
                    articles={articles}
                    updateArticle={updateArticle}
                    setArticles={setArticles}
                /> 
            }
            { isSpinner && <SpinnerComponent /> }
            { error && <FallBackUI /> }
        </div>
    );
}

export default ArticlesContainer;