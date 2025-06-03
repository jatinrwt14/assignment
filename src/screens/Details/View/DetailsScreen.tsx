import React from "react";
import { Text, View, Image, Dimensions, ScrollView } from "react-native";
import DetailsViewModel, { DetailsViewModelReturnType } from "../ViewModel/DetailsViewModel";
import CommonHeader from "../../../components/CommonHeader";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../../navigations/Stack/StackNavigator";
import { AllProductResponse } from "../../../networking/ResponseDTO/AllProductResponse";
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
type DetailScreenRouteProps = RouteProp<RootStackParamList, 'DetailsScreen'>

interface DetailScreenProps {
    route: DetailScreenRouteProps
}

const DetailsScreen: React.FC<DetailScreenProps> = ({ route }) => {
    const info: AllProductResponse = route.params?.data
    const viewModel: DetailsViewModelReturnType = DetailsViewModel(route.params?.data)
    const screenWidth = Dimensions.get('window').width;
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ flex: 0.8 }}>
                <CommonHeader title="Detail" showBack={true} />
            </View>
            <View style={{ flex: 9.2 }}>
                <ScrollView >
                    <View style={{ backgroundColor: 'white', padding: 0, borderRadius: 5, width: screenWidth }}>
                        <View style={{ alignItems: 'center' }}>
                            <Image src={info?.image} style={{ width: screenWidth - 20, height: 170, resizeMode: 'contain', borderRadius: 10, backgroundColor: 'white' }} />
                        </View>
                        <View style={{ marginTop: 10, marginHorizontal: 10 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <View style={{ flex: 1 }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 14, flexWrap: 'wrap' }}>{info?.title}</Text>
                                </View>
                                <View style={{ backgroundColor: 'green', padding: 5, flexDirection: 'row', alignItems: 'center', borderRadius: 3 }}>
                                    <Text style={{ color: 'white', fontWeight: 'bold' }}>{info?.rating.rate.toFixed(1)}</Text>
                                    <AntDesign name='star' size={10} style={{ marginLeft: 3, color: 'white' }} />
                                </View>
                            </View>
                            <View style={{ marginTop: 10 }}>
                                <Text>{info?.description}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: 10, alignItems: 'center' }}>
                                <Text style={{ fontWeight: '900' }}>Price: </Text>
                                <MaterialIcons name='currency-rupee' size={14} style={{ color: 'black' }} />
                                <Text>{info?.price}</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>

        </View>
    )
}

export default DetailsScreen