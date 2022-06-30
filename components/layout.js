import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native'
import Colors from '../utils/colors'


export default function Layout({ children }) {


    return (
        <>
            <LinearGradient colors={[Colors.primary, Colors.secondary]} style={styles.wrapper} >
                <ImageBackground style={styles.wrapper} source={require('../assets/background.png')} resizeMode={'cover'}
                    imageStyle={styles.image}>
                    <SafeAreaView style={styles.wrapper}>
                        {children}
                    </SafeAreaView>
                </ImageBackground>
            </LinearGradient>
        </>
    )
}

const styles = StyleSheet.create({

    wrapper: {
        flex: 1,
        justifyContent: 'center'
    },
    image: {
        opacity: .45
    },

})