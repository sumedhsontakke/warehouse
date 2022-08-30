import styled from "styled-components";

export const ProductContent = styled.div`
    width: 30%;
    border: 2px solid #e7e7e7;
    margin-right: 5%;
    cursor: pointer;
    padding: 20px;
    font-weight: 600;
    margin-bottom: 35px;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    > span {
        width: 50%
    }
    > span:nth-last-child(1){
        margin-left: auto;
        display: block;
    }
    > div{
        width: 100%;
        margin-top: 30px;
        margin-bottom: 20px;
        :hover{
            color: var(--bs-gray-900);
        }
    }
    :hover{
        color: var(--bs-link-color)
    }
    :nth-child(3n){
        margin-right: 0;
    }
    @media screen and (max-width: 768px){
        width: 100%;
        margin-right: 0;
    }
`;