import ProductModel from "../models/ProductModel"

type ProductCode = string

let host = ""

let productMap = new Map<ProductCode,ProductModel>([
    [
        "firstPlant", {
            description: "firstPlant description",
            notes:
             [{
                 count: 0,
                 note: "Planted first."

             }]
        } as ProductModel
    ],
    [
        "secondPlant", {
            description: "secondPlant description",
            notes:
             [{
                 count: 0,
                 note: "Planted a while ago."

             }]
        } as ProductModel
    ]
])

export async function productFetcher(productCode: ProductCode, headers: HeadersInit): Promise<ProductModel> {

    if (productMap.has(productCode)) {
        return new Promise<ProductModel>((resolve, reject)=> {
            resolve(productMap.get(productCode ?? "") ?? {} as ProductModel)
        } )
    }
    else {
        return new Promise<ProductModel>((resolve, reject) => {
            reject()
        })
    }

    //  const response = await fetch(host, {method: 'GET', headers: headers})
    //                      .then(response => response.json())
    //                      .catch(error => console.log(error))
   
    //    let responseModel = JSON.parse(response) as ProductModel
    //    console.log(responseModel)
    //    return new Promise<ProductModel>((resolve, reject) => {
    //      resolve(responseModel)
    //    })
 }