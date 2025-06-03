import React from "react";
import { View, Text, Image } from "react-native";

interface NoDataFoundProps {
    message: string
}

const NoDataFound: React.FC<NoDataFoundProps> = ({message}) => {
    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontWeight: 'bold'}}>{message}</Text>
        </View>
    )
}

export default NoDataFound