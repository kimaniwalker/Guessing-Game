import React from 'react'
import {
    TextInput, Text, View, Button, StyleSheet, ImageBackground, Alert, ScrollView, useWindowDimensions
} from 'react-native'
import CustomButton from '../components/button'
import { LinearGradient } from 'expo-linear-gradient'
import Start from './start'
import Layout from '../components/layout'
import Container from '../components/container'
import Row from '../components/row'


export default function GameOver({ logs, setNumber, number, setLogs }) {
    const { height } = useWindowDimensions()
    const MarginTopDistance = height < 480 ? 25 : 40

    if (!number) return <Start setNumber={setNumber} />

    return (
        <>
            <Layout>
                <Container style={{ marginTop: 0 }}>
                    <Text style={styles.score}>Game Over</Text>
                    <Row>

                        <Text style={styles.logText}>Your Number was {number} </Text>
                    </Row>
                </Container>

                <Container style={{ marginTop: MarginTopDistance }}>
                    <Row>
                        <CustomButton onPress={() => {
                            setLogs([])
                            setNumber(null)
                        }}>
                            Play Again
                        </CustomButton>

                    </Row>
                    <Text style={styles.logText}>It took the computer {logs.length} tries to guess your number correctly.</Text>
                </Container>
            </Layout>
        </>
    )
}

const styles = StyleSheet.create({


    score: {
        fontSize: 32,
        marginVertical: 10,
        fontFamily: 'poppins'
    },
    logText: {
        textAlign: 'center',
        fontSize: 16
    }

})



