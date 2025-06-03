import React from "react";
import { Text, View } from "react-native";
import DetailsViewModel, { DetailsViewModelReturnType } from "../ViewModel/DetailsViewModel";

const DetailsScreen = () => {

    const viewModel: DetailsViewModelReturnType = DetailsViewModel()

    return(
        <View>
            <Text>Hello details</Text>
        </View>
    )
}

export default DetailsScreen