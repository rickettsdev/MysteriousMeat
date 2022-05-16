import { useParams } from 'react-router-dom';
import ProductModel from "../models/ProductModel";

export const Product = () => {
    let dataMap = new Map<string,ProductModel>([
        [
            "firstPlant", {
                description: "firstPlant description",
                notes:
                 [{
                     count: 0,
                     note: ""

                 }]
            } as ProductModel
        ],
        [
            "secondPlant", {
                description: "secondPlant description",
                notes:
                 [{
                     count: 1,
                     note: ""

                 }]
            } as ProductModel
        ]
    ])
    const { value } = useParams();
    var content = "not categorized"
    if (value !== null) {
        content = dataMap.get(value ?? "not categorized")?.description ?? "not categorized"
    }

    return (
        <h1>Product Page {content}</h1>
    );
}