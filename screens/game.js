import React from 'react'
import {
    Text, StyleSheet, Alert, ScrollView, useWindowDimensions
} from 'react-native'
import CustomButton from '../components/button'
import GameOver from './gameOver'
import Layout from '../components/layout'
import Container from '../components/container'
import Row from '../components/row'
import { AntDesign } from '@expo/vector-icons';


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

    const { width, height } = useWindowDimensions()
    const MarginTopDistance = height < 480 ? 25 : 0
    const ContainerHeight = height < 480 ? null : '50%'


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

    }

    if (gameOver) return <GameOver logs={logs} setNumber={setNumber} number={number} setLogs={setLogs} />

    return (
        <>

            <Layout>
                <Container style={{ marginTop: MarginTopDistance, height: ContainerHeight, backgroundColor: 'transparent', marginHorizontal: 0, padding: 0 }}>

                    <Container style={{ marginTop: 0 }}>
                        <Text style={styles.score}>Is Your Number {currentGuess} ?</Text>
                        <Row>

                            <CustomButton onPress={nextGuessHandler.bind(this, 'higher')} >
                                <AntDesign name="plus" size={24} color="black" />
                            </CustomButton>
                            <CustomButton onPress={nextGuessHandler.bind(this, 'lower')} >
                                <AntDesign name="minus" size={24} color="black" />
                            </CustomButton>
                        </Row>
                    </Container>
                </Container>

                <ScrollView style={styles.scrollView}>
                    {logs && (
                        logs.map((item) => (
                            <Container key={item} style={{ marginTop: 20, marginVerticle: 5 }}>
                                <Text style={styles.logItem}>{item}</Text>
                            </Container>
                        ))
                    )}

                </ScrollView>
            </Layout>
        </>
    )
}

const styles = StyleSheet.create({

    score: {
        fontSize: 32,
        fontFamily: 'poppins',
        textAlign: 'center'
    },
    scrollView: {
        marginTop: 5,
    },
    logItem: {
        fontSize: 18
    }

})



