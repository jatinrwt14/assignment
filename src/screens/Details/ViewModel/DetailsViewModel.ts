import React, { useState } from "react";

export interface DetailsViewModelReturnType {
    loader: boolean
}

const DetailsViewModel = (): DetailsViewModelReturnType => {

    const [loader, setLoader] = useState(false)

    return {
        loader
    }
}

export default DetailsViewModel;