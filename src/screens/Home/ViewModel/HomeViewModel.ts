import React, { useState } from "react";

export interface HomeViewModelReturnType {
    loader: boolean
}

const HomeViewModel = (): HomeViewModelReturnType => {

    const [loader, setLoader] = useState(false)

    return {
        loader
    }
}

export default HomeViewModel