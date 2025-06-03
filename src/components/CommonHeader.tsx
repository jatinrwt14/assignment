import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';
import { RootStackParamList } from "../navigations/Stack/StackNavigator";
import { StackNavigationProp } from "@react-navigation/stack";
import { useSelector } from "react-redux";
import { RootState } from '../redux/store/store'
// import { useSelector } from "react-redux";
// import { RootState } from "../redux/store/store";
// import { useEffect } from "react";

interface CommonHeaderProps {
    title: string
    showBack: Boolean
}

const CommonHeader: React.FC<CommonHeaderProps> = ({ title, showBack }) => {
    
    const cartCount = useSelector((state: RootState) => {
        const count = state.userPreference.userPreference.finalCart.length
        return count
    }
        
    );

    // useEffect(() => {
    //     if (cartCount > 0) {
    //       setCount(cartCount);
    //     }
    // }, [cartCount]);

    
      
      
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const navigate = useNavigation();
    // const [count, setCount] = useState(0)
    // const openDrawer = () => {
    //     navigation.dispatch(DrawerActions.openDrawer());
    // };

    // const getCartCount = useSelector((state: RootState) => state.userPreference.userPreference.customCoil.length);

    const navigationToCart = () => {
        navigation.navigate('CartScreen')
    }
    const navigateBack = () => {
        navigate.goBack()    
    }

    return (
        <View style={styles.shadowContainer}>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                { showBack && (
                <TouchableOpacity onPress={navigateBack}>
                    <Ionicons name={"arrow-back"} size={30} />
                </TouchableOpacity>
                )}
                <Text style={{ fontFamily: 'Helvetica-Bold', fontSize: 18, marginLeft: 5 }}>{title}</Text>
            </View>
            {/* <Image source={require('../assets/icons/logo.png')} width={0} height={0} style={{ width: 30, height: 30, resizeMode: 'contain', alignItems: 'center', flex: 1 }} /> */}
            {/* {showCart && ( */}
                <TouchableOpacity onPress={navigationToCart} >
                    <Ionicons name={"cart-outline"} size={30} />
                    { cartCount > 0 && (
                    <View style={styles.badgeContainer}>
                        <Text style={styles.badgeText}>{cartCount}</Text>
                    </View>

                    )}
                </TouchableOpacity>
            {/* )} */}
            {/* {!showCart && (
                <TouchableOpacity onPress={navigationToCart} >
                    <Entypo name={"plus"} size={30} />

                </TouchableOpacity>
            )} */}

        </View>
    )
}

export default CommonHeader;

const styles = StyleSheet.create({
    shadowContainer: {
        flex: 1,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 4
    },
    badgeContainer: {
        position: 'absolute',
        right: -3,
        top: -2,
        backgroundColor: 'red',
        borderRadius: 10,
        paddingHorizontal: 5,
        minWidth: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    badgeText: {
        color: 'white',
        fontSize: 10,
        fontWeight: 'bold',
    },
});