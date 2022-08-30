import { memo, useEffect, useState } from 'react';
import { getProductList, getSales } from '../../misc/request';
import SalesComponent from '../../components/sales';
import { IProduct, ISale } from '../../misc/interfaces';
import FallBackUI from '../../components/FallBackUI';

function Sales(){

    const [error, setError] = useState<boolean>(false);
    const [isLoading, setLoading] = useState<boolean>(false);
    const [salesDetail, setSalesDetail] = useState<ISale[] | null>(null);
    const [productList, setProductList] = useState<IProduct | null>(null);

    useEffect(()=>{
        saveSales();
    }, [])

    const saveSales = async() =>{
        setLoading(true);
        await getSales()
        .then((resp)=> {
            setLoading(false);
            setError(false);
            saveProductList(resp.data);
        })
        .catch(()=>{ 
            setError(true);
            setLoading(false);
        })
    }

    const getReadableDate = (createdAt:string) =>{
        const _createdDate = new Date(createdAt).toDateString();
        return _createdDate;
    }

    const saveProductList = async(salesResult:ISale[]) =>{
        setLoading(true);
        await getProductList()
        .then((resp:any)=> {
            // setSalesDetail(resp.data);
            const _salesResult:ISale[] =
            salesResult.map(sale =>{
                const filterProduct:IProduct[] = resp.data.filter((product:IProduct) => product.id === sale.productId)
                return {
                    productId: sale.productId,
                    name: filterProduct[0].name,
                    createdAt: getReadableDate(sale.createdAt),
                    amountSold: sale.amountSold,
                    id: sale.id
                }
            });
            setSalesDetail(_salesResult);
            setLoading(false);
            setError(false);
        })
        .catch(()=>{
            setError(true);
            setLoading(false);
        })
    }    

    return(
        <div>
            {error && <FallBackUI />}
            {
                !error && 
                <SalesComponent
                    salesDetail={salesDetail}
                    isLoading={isLoading}
                    productList={productList}
                />
            }
        </div>
    )
}

export default memo(Sales);