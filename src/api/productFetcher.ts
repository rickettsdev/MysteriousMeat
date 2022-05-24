import ProductModel from "../models/ProductModel"
import { productMap } from "./localcache/ProductCacheLocal"
import { ProductCode } from "./types/GeneralTypes"

let host = "https://s3.us-east-2.amazonaws.com/mysteriousmeat.data"
let pageDataFileName = "pageData.json"

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