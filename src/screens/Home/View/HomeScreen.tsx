import React from "react";
import { Text, View } from "react-native";
import HomeViewModel, { HomeViewModelReturnType } from "../ViewModel/HomeViewModel";

const HomeScreen = () => {

    const viewModel: HomeViewModelReturnType = HomeViewModel()

    return(
        <View style={{flex: 1}}>
            <Text>Hello</Text>
        </View>
    )
}

export default HomeScreen