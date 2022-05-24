import NoteModel from "../../models/NoteModel";
import ProductModel from "../../models/ProductModel";
import { ProductCode } from "../types/GeneralTypes";

export const productMap = new Map<ProductCode,ProductModel>([
    [
        "firstPlant", {
            description: "firstPlant description",
            notes:
             [{
                 count: "2022-05-18T15:27:21.202Z",
                 note: "Planted first."

             }]
        } as ProductModel
    ],
    [
        "secondPlant", {
            description: "secondPlant description",
            notes: [ {
                count: "2021-05-18T15:27:21.202Z",
                note: "Planted first."
            
            }, {
                count: "2022-05-18T15:27:21.202Z",
                note: "Planted last."
            
            }] as Array<NoteModel>
        } as ProductModel
    ]
])