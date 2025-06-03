import React from "react";
import { AllProductResponse } from "../../../networking/ResponseDTO/AllProductResponse";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store/store";

export interface CartViewModelReturnType {
    cartData: AllProductResponse[]
}

const CartViewModel = () => {
    const cartData: AllProductResponse[] = useSelector((state: RootState) => state.userPreference.userPreference.finalCart)
    return {
        cartData
    }
}

export default CartViewModel