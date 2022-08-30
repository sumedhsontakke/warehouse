import { memo } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components"

export const AddProductWrapper = styled.div`
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    margin-top: 30px;
    text-align: right;
    :hover{
        color: var(--bs-link-color);
    }
`;

function AddProduct(){
    const navigate = useNavigate();
    return(
        <AddProductWrapper onClick={()=> navigate("/add-product")}>
            <span>Add Product</span>
        </AddProductWrapper>
    )
}

export default memo(AddProduct)