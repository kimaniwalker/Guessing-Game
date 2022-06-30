import React from 'react'
import {
    StyleSheet, View
} from 'react-native'
import Colors from '../utils/colors'

export default function Container({ children, style }) {


    return (
        <>
            <View style={[styles.container, style]}>
                {children}
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary,
        marginTop: 100,
        marginHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        shadowColor: 'lightgray',
        shadowOffset: { width: 2, height: 2 },
        shadowRadius: 9,
        shadowOpacity: 1,
        padding: 16
    },

})