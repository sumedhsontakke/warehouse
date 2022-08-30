import { FormEvent, ReactNode } from "react";

export interface IProductsContext{
    products: IProduct[] | null;
    setProducts: (products: IProduct[]) => void    
    saveProductList: (retry: number) => void
}

export interface IProduct{
    id: string;
    name: string;
    requiredArticles: IRequiredArticle[]
} 

export interface IProductSave {
    name: string;
    articles: IRequiredArticleState[]    
}

export interface IRequiredArticle{
    id: string;
    amountRequired: number;
}

export interface IRequiredArticleState{
    id: string;
    amountRequired: number | string;
}

export interface IArticle{
    id: string;
    name: string;
    amountInStock?: number;  
    amountToSubtract?: number  
}


export interface IArticleDetails extends IRequiredArticle, IArticle{

}

export interface IProductDetailsParam{
    productId: string
}

export interface IProductDetailsWithArticles extends IProduct {
    articles: IArticleDetails[]
}

export interface IProductDetailsProps extends IProductDetailsWithArticles{
    saleProduct: (id:string, articles:IArticleDetails[]) => void;
}

export interface IReactNode{
    children: ReactNode;
}

export interface ICustomButton extends IReactNode {
    type?: string;
    onClick?: (e:Event) => any;
    margin? : string;
    width?: string;
    disabled?: boolean | null | undefined;
}

export interface IText extends IReactNode{
    fontSize?: string;
    fontWeight?: number; 
    color? : string;
    margin? : string;
    onClick? : () => void;
}

export interface IFlexWrap {
    flexDirection?: string;
    children?: ReactNode;
}

export interface IModalProps{
    showModal: boolean;
    setShowModal: () => void;
    handleClose: () => void;
    handleSubmit: () => void;
    headingText?: string;
    bodyText?: string; 
    closeButtonText?: string; 
    submitButtonText?: string; 
}

export interface ISale {
    amountSold: number;
    createdAt: string;
    id: string;
    productId: string;
    name: string;
}

export interface ISalesProps {
    salesDetail: ISale[] | null;
    isLoading: boolean;
    productList: IProduct | null;
}

export interface IArticleDropdrown extends IArticle {

}

export interface ISetProduct {
    name: string;
    requiredArticles: IRequiredArticle[];
}

export interface IAlert{
    message: string;
    variant: string;
    show: boolean;
}

export interface IAddProductProps {
    submit : (e: FormEvent) => void;
    setProduct: (value: React.ChangeEvent<HTMLInputElement>) => void;
    addRequiredArticle: (value: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> | null, inputType: string, index: number) => void;
    allArticles: IArticle[] | null;
    requiredArticles: IRequiredArticleState[];
    alert: IAlert;
    setAlert: (alert: IAlert) => void;
    product: string;
}

export interface IArticlesProps {
    articles: IArticleState[] | null;
    updateArticle: (id: number) => void;
    setArticles: (article: IArticleState[]) => void;
}

export interface IArticleState extends IArticle{
    inputValue: string | number;
}

export interface IArticleComponentProps{
    article: IArticleState;
    updateArticle: (id: number) => void; 
    setArticles: (value: string, index: number) => void;
    articleIndex: number;
}

export interface IUpdateArticle {
    name: string;
    amountInStock: number
}

