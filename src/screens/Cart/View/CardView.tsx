import React from "react";
import { Text, View, Image, Dimensions, TouchableOpacity } from "react-native";
import { AllProductResponse } from "../../../networking/ResponseDTO/AllProductResponse";
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'

interface CardViewProps {
    item: AllProductResponse
    // onAddCart: (item: AllProductResponse) => void
}

const CardView: React.FC<CardViewProps> = ({item}) => {
    const screenWidth = Dimensions.get('window').width;
    // const cardWidth = (screenWidth / 2) - 20; 
    return(
        <View style={{backgroundColor: 'white', padding: 0, borderRadius: 5, elevation: 10, shadowColor: '#000', shadowOffset: {width: 2, height: 5}, shadowOpacity: 0.2, shadowRadius: 1.41, marginVertical: 15, width: screenWidth}}>
            <View style={{alignItems: 'center'}}>
                <Image src={item.image} style={{width: screenWidth - 20, height: 170, resizeMode: 'contain', borderRadius: 10, backgroundColor: 'white'}} />
            </View>
            <View style={{marginTop: 10, marginHorizontal: 10}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <View style={{flex: 1}}>
                    <Text style={{fontWeight: 'bold', fontSize: 14, flexWrap: 'wrap'}}>{item.title}</Text>
                    </View>
                    <View style={{backgroundColor: 'green', padding: 5, flexDirection: 'row', alignItems: 'center', borderRadius: 3}}>
                        <Text style={{color: 'white', fontWeight: 'bold'}}>{item.rating.rate.toFixed(1)}</Text>
                        <AntDesign name='star' size={10} style={{marginLeft: 3, color: 'white'}} />
                    </View>
                </View>
                <View style={{marginTop: 10}}>
                    <Text>{item.description}</Text>
                </View>
                <View style={{flexDirection: 'row', marginTop: 10, alignItems: 'center'}}>
                    <Text style={{fontWeight: '900'}}>Price: </Text>
                    <MaterialIcons name='currency-rupee' size={14} style={{ color: 'black'}} />
                    <Text>{item.price}</Text>
                </View>
            </View>
        </View>
    )
}

export default CardView
