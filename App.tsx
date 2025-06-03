import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Text } from "react-native";
import StackNavigator from "./src/navigations/Stack/StackNavigator";
import BaseView from "./src/components/BaseView";
import { Provider } from "react-redux";
import { persistor, store } from "./src/redux/store/store";
import { PersistGate } from "redux-persist/integration/react";


const App = () => {
  return(
    <BaseView>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <NavigationContainer>
            <StackNavigator/>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </BaseView>    
  )
}

export default App;