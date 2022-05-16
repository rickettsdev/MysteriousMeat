import React from "react"
import { useParams } from 'react-router-dom';

export const Product = () => {
    const { value } = useParams();
    return (
        <h1>Product Page {value}</h1>
    );
}