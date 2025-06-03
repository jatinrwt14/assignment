import React from 'react'
import { KeyboardAvoidingView, View, Platform, Dimensions } from 'react-native'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'

interface BaseViewProps {
    children: React.ReactNode
}

const BaseView: React.FC<BaseViewProps> = ({ children }) => {
    return(
        <View style={{height: Dimensions.get("window").height, backgroundColor: 'white'}}>
            <SafeAreaProvider>
                <SafeAreaView style={{flex: 1}}>
                    <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.OS === 'ios' ? 'padding' : 'height'} keyboardVerticalOffset={-300}>
                        {children}
                    </KeyboardAvoidingView>
                </SafeAreaView>
            </SafeAreaProvider>
        </View>
    )
}

export default BaseView;
