import React from 'react'
import {
    TextInput, Text, View, Button, StyleSheet, ImageBackground, Alert, ScrollView
} from 'react-native'
import CustomButton from '../components/button'
import { LinearGradient } from 'expo-linear-gradient'
import Start from './start'


export default function GameOver({ logs, setNumber, number, setLogs }) {




    if (!number) return <Start setNumber={setNumber} />

    return (
        <>
            <LinearGradient colors={['#3B91CC', '#3BCC9F']} style={styles.wrapper} >
                <ImageBackground style={styles.wrapper} source={require('../assets/background.png')} resizeMode={'cover'}
                    imageStyle={styles.image}>


                    <View style={styles.container}>
                        <Text style={styles.score}>Game Over</Text>
                        <View style={styles.row}>
                            <Text>Your Number was {number} </Text>
                        </View>

                    </View>
                    <View style={styles.container}>
                        <View style={styles.row}>


                            <CustomButton onPress={() => {
                                setLogs([])
                                setNumber(null)
                            }}>
                                Play Again
                            </CustomButton>
                        </View>
                        <ScrollView>
                            <Text>It took the computer {logs.length} tries to guess your number correctly.</Text>
                        </ScrollView>
                    </View>
                </ImageBackground>

            </LinearGradient>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3B91CC',
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
    wrapper: {
        flex: 1
    },
    image: {
        opacity: .45
    },
    score: {
        fontSize: 32,
        marginVertical: 10
    },
    numberInput: {
        borderBottomColor: 'yellow',
        borderRadius: 8,
        borderColor: 'white',
        height: 78,
        padding: 16,
        fontSize: 32,
        textAlign: 'center',
        backgroundColor: 'white',
        width: 120,
    },
    row: {
        marginVertical: 20,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    }
})



