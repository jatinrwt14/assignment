import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Text } from "react-native";
import StackNavigator from "./src/navigations/Stack/StackNavigator";
import BaseView from "./src/components/BaseView";


const App = () => {
  return(
    <BaseView>
      <NavigationContainer>
        <StackNavigator/>
      </NavigationContainer>
    </BaseView>
    
  )
}

export default App;