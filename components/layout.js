import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { StyleSheet, ImageBackground, SafeAreaView, ScrollView, useWindowDimensions, View } from 'react-native'
import Colors from '../utils/colors'


export default function Layout({ children }) {

    const { width, height } = useWindowDimensions()
    const MarginTopDistance = height < 480 ? 25 : 0


    return (
        <>
            <LinearGradient colors={[Colors.primary, Colors.secondary]} style={styles.wrapper} >
                <ImageBackground style={styles.wrapper} source={require('../assets/background.png')} resizeMode={'cover'}
                    imageStyle={styles.image}>
                    <SafeAreaView style={styles.wrapper}>
                        {MarginTopDistance ? <>
                            <ScrollView style={{ marginTop: MarginTopDistance }}>
                                {children}
                            </ScrollView>
                        </> : <>
                            {children}
                        </>}
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