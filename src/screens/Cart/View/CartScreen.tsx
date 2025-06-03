import React from "react";
import { Text, View, FlatList } from "react-native";
import CommonHeader from "../../../components/CommonHeader";
import CartViewModel, { CartViewModelReturnType } from "../ViewModel/CartViewModel";
import CardView from "./CardView";
import NoDataFound from "../../../components/NoDataFound";

const CartScreen = () => {

    const viewModel: CartViewModelReturnType = CartViewModel()

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ flex: 0.8 }}>
                <CommonHeader title="Cart" showBack={true} />
            </View>
            <View style={{ flex: 9.2 }}>
                {viewModel.cartData.length > 0 ? (
                    <FlatList
                        data={viewModel.cartData}
                        renderItem={({ item }) => (
                            <CardView item={item} />
                        )}
                    />
                ) : (
                    <View>
                        <NoDataFound message="You don't have item in Cart." />
                    </View>
                )}

            </View>
        </View>
    )
}

export default CartScreen