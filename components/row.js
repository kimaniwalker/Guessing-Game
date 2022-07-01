import React from 'react'
import { View, StyleSheet } from 'react-native'

export default function Row({ children, style }) {


    return (
        <>
            <View style={[styles.row, style]}>
                {children}
            </View>
        </>
    )
}

const styles = StyleSheet.create({

    row: {
        marginVertical: 20,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },

})
