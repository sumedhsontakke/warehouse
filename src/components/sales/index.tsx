import { memo } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HeaderComponent from '../common/HeaderComponent';
import { ISalesProps, ISale } from "../../misc/interfaces";
import Text from "../../components/common/Text";
import SpinnerComponent from "../common/SpinnerComponent";
import { TableWrapper } from "./TableWrapper";
import DataTable from 'react-data-table-component';

function SalesComponent(props: ISalesProps){ 

    const getColumns = () =>{
        return[
            {
                name: 'Product Id',
                selector: (row:ISale) => row.productId,
            },
            {
                name: 'Product Name',
                selector: (row:ISale) => row.name,
            },
            {
                name: 'Quantity Sold',
                selector: (row:ISale) => row.amountSold,
            },
            {
                name: 'Sold date',
                selector: (row:ISale) => row.createdAt,
            },                        
        ];
    }


    return(
        <>
            <HeaderComponent />
            { props.isLoading && <SpinnerComponent />}
            {
                props.salesDetail ?
                <Container>
                    <Row>
                        <Col>
                            <Text margin={"20px 0"} fontSize={"24px"} fontWeight={600}>Sales</Text>
                            <TableWrapper>
                                <DataTable
                                    pagination 
                                    columns={getColumns()}
                                    data={props.salesDetail}
                                />   
                            </TableWrapper>                      
                        </Col>
                    </Row>
                </Container>                        
                : 
                !props.isLoading && props.salesDetail ?
                    <Text margin={"35px 0"} fontSize={"24px"} fontWeight={600}>No sales found</Text>
                    : ""
            }
        </>
    );
}

export default memo(SalesComponent);    