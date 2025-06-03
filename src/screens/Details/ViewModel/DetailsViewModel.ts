import React, { useState } from "react";
import { AllProductResponse } from "../../../networking/ResponseDTO/AllProductResponse";

export interface DetailsViewModelReturnType {
    loader: boolean
}

const DetailsViewModel = (info: AllProductResponse): DetailsViewModelReturnType => {

    const [loader, setLoader] = useState(false)

    return {
        loader
    }
}

export default DetailsViewModel;