import { createContext, useContext } from 'react';
import { IProductsContext } from '../../misc/interfaces';

export const ProductsContext = createContext<IProductsContext>({
    products: null,
    setProducts: () => {},
    saveProductList: () =>{}
});

export const useProductsContext = () => useContext(ProductsContext);