import React from 'react'
import {
    TextInput, Text, View, Button, StyleSheet, ImageBackground, Alert, ScrollView
} from 'react-native'
import CustomButton from '../components/button'
import { LinearGradient } from 'expo-linear-gradient'
import GameOver from './gameOver'


function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

export default function Game({ number, logs, setNumber, setLogs }) {

    const initialGuess = generateRandomBetween(1, 100, number);
    const [currentGuess, setCurrentGuess] = React.useState(initialGuess);
    const [gameOver, setGameOver] = React.useState(false)

    React.useEffect(() => {
        if (currentGuess == number) {
            console.log('game over')
            setGameOver(true)
            minBoundary = 1;
            maxBoundary = 100;

        }
    }, [currentGuess, logs, gameOver]);


    function nextGuessHandler(direction) {
        // direction => 'lower', 'greater'
        if (
            (direction === 'lower' && currentGuess < number) ||
            (direction === 'greater' && currentGuess > number)
        ) {
            Alert.alert("Don't lie!", 'You know that this is wrong...', [
                { text: 'Sorry!', style: 'cancel' },
            ]);
            return;
        }

        if (direction === 'lower') {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }

        const newRndNumber = generateRandomBetween(
            minBoundary,
            maxBoundary,
            currentGuess
        );

        setCurrentGuess(newRndNumber);
        logs.push(`Is your number ${newRndNumber} ?`)

        console.log(newRndNumber)
        console.log(number)

    }

    if (gameOver) return <GameOver logs={logs} setNumber={setNumber} number={number} setLogs={setLogs} />

    return (
        <>
            <LinearGradient colors={['#3B91CC', '#3BCC9F']} style={styles.wrapper} >
                <ImageBackground style={styles.wrapper} source={require('../assets/background.png')} resizeMode={'cover'}
                    imageStyle={styles.image}>


                    <View style={styles.container}>
                        <Text style={styles.score}>{currentGuess}</Text>
                        <View style={styles.row}>
                            <CustomButton onPress={nextGuessHandler.bind(this, 'higher')} >+</CustomButton>
                            <CustomButton onPress={nextGuessHandler.bind(this, 'lower')} >-</CustomButton>
                        </View>

                    </View>
                    <View style={styles.container}>
                        <View style={styles.row}>


                            <CustomButton>
                                Try Again
                            </CustomButton>
                        </View>
                        <ScrollView>
                            {logs && (
                                logs.map((item) => (

                                    <View key={item} style={styles.row}>

                                        <Text>{item}</Text>

                                    </View>
                                ))
                            )}
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



