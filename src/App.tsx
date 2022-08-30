import { memo, } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './containers/home';
import Sales from './containers/sales';
import ProductDetails from './containers/ProductDetails';
import FallBackUI from './components/FallBackUI';
import AddProduct from './containers/AddProduct';
import ArticlesContainer from './containers/Articles';

function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<Home />} />
            <Route path="/product-details/:productId" element={<ProductDetails />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/articles" element={<ArticlesContainer />} />
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default memo(App);
