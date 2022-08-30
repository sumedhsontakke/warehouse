import { memo } from "react"
import { IProduct } from '../../misc/interfaces';
import { ProductContent } from './ProductContent';
import { useNavigate } from "react-router-dom";

function ProductComponent({
    product,
}: {product: IProduct}){
    const navigate = useNavigate();
    return(
        <ProductContent
            onClick={() => navigate(`/product-details/${product.id}`)}
        >
            {product.name}
        </ProductContent>
    )
}

export default memo(ProductComponent);