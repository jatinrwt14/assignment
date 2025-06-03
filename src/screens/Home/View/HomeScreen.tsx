import React from "react";
import { FlatList, Text, View } from "react-native";
import HomeViewModel, { HomeViewModelReturnType } from "../ViewModel/HomeViewModel";
import AllProductRepositoryImpl from "../../../repository/AllProductRepository/AllProductRepositoryImpl";
import CommonHeader from "../../../components/CommonHeader";
import Loader from "../../../components/Loader";
import CardView from "./CardView";

const HomeScreen = () => {

    const viewModel: HomeViewModelReturnType = HomeViewModel(AllProductRepositoryImpl)

    return(
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <View style={{flex: 0.8}}>
                <CommonHeader title="Product" showBack={true}/>
            </View>
            <View style={{flex: 9.2}}>
                <FlatList 
                    data={viewModel.productData}
                    renderItem={({item}) => (
                        <CardView item={item} onAddCart={(item) => viewModel.addToCart(item)} onTouch={(item) => viewModel.onNavigation(item)}/>
                    )}
                />
            </View>
            <Loader visible={viewModel.loader}/>
        </View>
    )
}

export default HomeScreen