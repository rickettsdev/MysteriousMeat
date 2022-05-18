import NoteModel from "../models/NoteModel"
import ProductModel from "../models/ProductModel"

type ProductCode = string

let host = "https://s3.us-east-2.amazonaws.com/mysteriousmeat.data"
let pageDataFileName = "pageData.json"

let productMap = new Map<ProductCode,ProductModel>([
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

export async function productFetcher(productCode: ProductCode, headers: HeadersInit): Promise<ProductModel> {

    if (productMap.has(productCode)) {
        return new Promise<ProductModel>((resolve, reject)=> {
            resolve(productMap.get(productCode ?? "") ?? {} as ProductModel)
        } )
    }

    const productRequestUrl = host + `/${productCode}/${pageDataFileName}`

    const response = await fetch(productRequestUrl, {method: 'GET', headers: headers})
                         .then(response => response.json())
                         .catch(error => console.log(error))

    console.log(JSON.stringify(response.pageData))
    return new Promise<ProductModel>((resolve, reject) => {
        resolve(response.pageData)
    })
 }