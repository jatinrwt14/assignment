import APIService from "../../networking/API/APIService";
import { CommonAPIResponse } from "../../networking/ResponseDTO/CommonAPIResponse";
import { AllProductResponse } from "../../networking/ResponseDTO/AllProductResponse";
import { RequestType } from "../../utils/enum";
import { requestTypeToString } from "../../utils/helper";


export interface AllProductRepositoryProtocol {
    getAllProductList() : Promise<CommonAPIResponse<AllProductResponse[]>>
}

const AllProductRepositoryImpl: AllProductRepositoryProtocol = {
    getAllProductList: async () => {
        return await APIService({
            url: 'https://fakestoreapi.com/products',
            method: requestTypeToString(RequestType.GET)
        })
    }
}

export default AllProductRepositoryImpl