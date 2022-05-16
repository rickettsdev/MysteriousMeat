import { useParams } from 'react-router-dom';
import { useState } from 'react'
import { productFetcher } from '../api/productFetcher';
import ProductModel from "../models/ProductModel";

export const Product = () => {
    const { value } = useParams();
    const [productState, setProductState] = useState<ProductModel>()
    if (value !== null) {
        let response = productFetcher(value as string, {}).then((model) => {
            setProductState(model)
        }).catch(error => console.log(error))
    }

    const productNotes = []
    const productStateNotes = productState?.notes ?? []

    for(var model of productStateNotes) {
        productNotes.push(<li key = {model.note}> {model.note}</li>)
    }

    return (
        <div>
            <h1>Product Page {productState?.description}</h1>
            <ul>{productNotes}</ul>
        </div>
    );
}