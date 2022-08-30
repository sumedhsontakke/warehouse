import styled from 'styled-components';

export const Image = styled.img`
    width: 200px;
`;

export const Header = styled.header`
    padding: 15px 0;
    border-bottom: 4px solid #e7e7e7;
`;

export const Links = styled.nav`
    display: flex;
    height: 100%;
    justify-content: end;
    align-items: center;
    a {
        font-size: 17px;
        padding-left: 40px;
        text-decoration: none;
    }
`;

export const ProductWrapper = styled.div`
    display: flex; 
    flex-wrap: wrap;  
    margin-top: 30px;
`;