import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AllProductResponse } from '../../networking/ResponseDTO/AllProductResponse'



export interface appDefaultState {
    userPreference: UserPreference
}

export interface UserPreference {
    finalCart: AllProductResponse[]
}

const userPrefernceInitialState: appDefaultState = {
    userPreference: {
        finalCart: []
    }
};

const userPreferenceSlice = createSlice({
    name: 'userPreference',
    initialState: userPrefernceInitialState,
    reducers: {
        saveItemsToCart: (state, action: PayloadAction<AllProductResponse>) => {
            state.userPreference.finalCart.push(action.payload)
        }
    }
})

export const { saveItemsToCart } = userPreferenceSlice.actions

export default userPreferenceSlice.reducer