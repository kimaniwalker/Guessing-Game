import React from 'react'
import { View, Text, Button, StyleSheet, Pressable } from 'react-native'

export default function CustomButton({ children, onPress, style }) {


    return (
        <>


            <View style={[styles.container, style]}>
                <Pressable style={({ pressed }) =>
                    pressed
                        ? [styles.notpressed, styles.pressed]
                        : styles.notpressed}
                    onPress={onPress}>
                    <Text style={styles.inputText}>{children}
                    </Text>
                </Pressable>
            </View>

        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        margin: 8,
        backgroundColor: 'lightblue',
        borderRadius: 8,
        shadowColor: 'lightgray',
        shadowOffset: { width: 2, height: 2 },
        shadowRadius: 9,
        shadowOpacity: .56,
    },
    inputText: {
        textAlign: 'center',
        fontSize: 16
    },
    pressed: {
        opacity: '.77'
    },
    notpressed: {
        opacity: 1
    }
})