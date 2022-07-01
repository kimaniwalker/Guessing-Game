import React from 'react'
import Container from '../components/container'
import Layout from '../components/layout'
import { Text } from 'react-native'

export default function Loading(props) {


    return (
        <>
            <Layout>
                <Container>
                    <Text>Loading...</Text>
                </Container>
            </Layout>
        </>
    )
}
