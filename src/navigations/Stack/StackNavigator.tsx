import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import HomeScreen from "../../screens/Home/View/HomeScreen";
import DetailsScreen from "../../screens/Details/View/DetailsScreen";

export type RootStackParamList = {
    HomeScreen: undefined,
    DetailsScreen: undefined
}

const StackNavigator = () => {
    const Stack = createStackNavigator<RootStackParamList>()

    return(
        <Stack.Navigator>
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="DetailsScreen"
                component={DetailsScreen}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}

export default StackNavigator