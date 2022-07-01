import React from 'react'
import {
    TextInput, View, StyleSheet, Alert, Text
} from 'react-native'
import CustomButton from '../components/button'
import Layout from '../components/layout'
import Container from '../components/container'
import Row from '../components/row'


export default function Start({ onConfirmNumber, setNumber }) {

    const [userinput, setUserinput] = React.useState('')

    function confirmInput() {
        let choseNumber = parseInt(userinput)

        if (isNaN(choseNumber) || choseNumber <= 0 || choseNumber > 99) {
            Alert.alert(
                'Must be a number',
                'Number must be between 1 & 99',
                [{
                    text: 'okay',
                    style: 'destructive',
                    onPress: setUserinput("")
                }]
            );
            return;
        }

        console.log("Valid number")
        onConfirmNumber()
        setNumber(userinput)

    }

    return (
        <>

            <Layout>
                <Container style={{ marginTop: 0, marginBottom: 20 }}>
                    <Text style={styles.instructionText}>Guessing Guru</Text>
                </Container>

                <Container style={{ marginTop: 0, paddingVertical: 50 }}>
                    <TextInput value={userinput} onChangeText={setUserinput} style={styles.numberInput} maxLength={2} keyboardType="number-pad" />

                    <Row>
                        <Text style={styles.instructionText}>Choose A Number Between 0 & 99</Text>
                    </Row>
                    <Row>
                        <CustomButton style={styles.Button} onPress={confirmInput}>Reset</CustomButton>
                        <CustomButton style={styles.Button} onPress={confirmInput}>Start</CustomButton>
                    </Row>

                </Container>

            </Layout>

        </>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
    image: {
        opacity: .45
    },
    numberInput: {
        borderRadius: 8,
        borderColor: 'white',
        height: 78,
        padding: 16,
        fontSize: 32,
        textAlign: 'center',
        backgroundColor: 'white',
        width: 120,
        fontFamily: 'poppins'
    },
    row: {
        marginVertical: 20,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    instructionText: {
        fontSize: 24,
        textAlign: 'center',
        fontFamily: 'poppins'
    },
    Button: {
        marginVertical: 0,
    }
})



