import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer, persistStore } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import UserPreference from "../reducer/reducer";

export type RootState = ReturnType<typeof store.getState>

const userPreferencePersistConfig = {
    key: 'userPreference',
    storage: AsyncStorage
}

const persistedUserPreferenceReducer = persistReducer(userPreferencePersistConfig, UserPreference)

const store = configureStore({
    reducer: {
        userPreference: persistedUserPreferenceReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
            },
        }),
});

const persistor = persistStore(store)

export {store, persistor}