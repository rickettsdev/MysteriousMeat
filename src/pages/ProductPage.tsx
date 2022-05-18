import { useParams } from 'react-router-dom';
import { useState } from 'react'
import { productFetcher } from '../api/productFetcher';
import ProductModel from "../models/ProductModel";
import { getTableContent } from '../table/ProductTable';

var modelSet = false

export const ProductPage = () => {
    const { value } = useParams();
    const [productState, setProductState] = useState<ProductModel>()
    if (value !== null && !modelSet) {
        productFetcher(value as string, {}).then((model) => {
            modelSet = true
            setProductState(model)
        }).catch(error => console.log(error))
    }

    var tableContent = <div></div>

    if (productState?.description != null) {
        tableContent = getTableContent(productState)
    }
    
    return (
        <div>
            <h2>{productState?.description}</h2>
            <div>{tableContent}</div>
        </div>
    );
}