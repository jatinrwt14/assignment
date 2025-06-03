import React, { useEffect, useState } from "react";
import { AllProductRepositoryProtocol } from "../../../repository/AllProductRepository/AllProductRepositoryImpl";
import { CommonAPIResponse } from "../../../networking/ResponseDTO/CommonAPIResponse";
import { AllProductResponse } from "../../../networking/ResponseDTO/AllProductResponse";
import { useDispatch } from "react-redux";
import { saveItemsToCart } from "../../../redux/reducer/reducer";
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from "../../../navigations/Stack/StackNavigator";
import { StackNavigationProp } from "@react-navigation/stack";


export interface HomeViewModelReturnType {
    loader: boolean
    productData?: AllProductResponse[]
    addToCart: (item: AllProductResponse) => void
    onNavigation: (item: AllProductResponse) => void
}

const HomeViewModel = (allProductRepository: AllProductRepositoryProtocol): HomeViewModelReturnType => {

    const [loader, setLoader] = useState(false)
    const [productData, setProductData] = useState<AllProductResponse[]>()
    const dispatch = useDispatch()
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    const getProductList = async () => {
        setLoader(true)
        try {
            const result: CommonAPIResponse<AllProductResponse[]> = await allProductRepository.getAllProductList()
            if (result.success) {
                setProductData(result.data)
            }
        } catch (error) {
            
        } finally {
            setLoader(false)
        }
    }

    const addToCart = (item: AllProductResponse) => {
        dispatch(saveItemsToCart(item))
    }

    const onNavigation = (item: AllProductResponse) => {
        navigation.navigate('DetailsScreen', {data: item})
    }

    useEffect(() => {
        getProductList()
    }, [])

    return {
        loader,
        productData,
        addToCart,
        onNavigation
    }
}

export default HomeViewModel