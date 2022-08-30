import { ROOT_URL, PRODUCTS_URL, ARTICLES_URL, SALES_URL } from "./Constants";
import axios from 'axios';
import { IArticle, IProductSave, IUpdateArticle } from "./interfaces";

export const getProductList = () => {
    return axios.get(`${ROOT_URL}${PRODUCTS_URL}`)
}

export const getProductDetails = (id: string) => {
    return axios.get(`${ROOT_URL}${PRODUCTS_URL}${id}`)
}

export const getArticleDetails = (id?: string) => {
    if (id) {
        return axios.get(`${ROOT_URL}${ARTICLES_URL}${id}`)
    } else {
        return axios.get(`${ROOT_URL}${ARTICLES_URL}`)
    }
}

export const getAllArticles = async () => {
    return await axios.get(`${ROOT_URL}${ARTICLES_URL}`)
        .then(resp => resp)
        .catch(err => err)
}

export const updateArticleById = async (id: string, article: IUpdateArticle) => {
    return await axios.patch(`${ROOT_URL}${ARTICLES_URL}${id}`, article,
        {
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                "Access-Control-Allow-Origin": "*"
            }
        })
        .then(resp => resp)
        .catch(err => err)
}

export const salesProduct = (productDetails: any) => {
    return axios.post(`${ROOT_URL}${SALES_URL}`, { ...productDetails })
}

export const saleArticles = (articles: IArticle[]) => {
    return axios.patch(`${ROOT_URL}${ARTICLES_URL}`, articles,
        {
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                "Access-Control-Allow-Origin": "*"
            }
        }
    );
}

export const getSales = () => {
    return axios.get(`${ROOT_URL}${SALES_URL}`)
}

export const saveProduct = async (product: IProductSave) => {
    return await axios.post(`${ROOT_URL}${PRODUCTS_URL}`, product)
        .then(resp => resp)
        .catch(err => err)
}
