import Start from './screens/start';
import Game from './screens/game'
import React from 'react';
import { useFonts, Poppins_900Black } from '@expo-google-fonts/poppins'
import AppLoading from 'expo-app-loading';

export default function App() {
  const [number, setNumber] = React.useState()
  const [logs, setLogs] = React.useState([])

  let [fontsLoaded] = useFonts({
    poppins: Poppins_900Black,
  });


  function startGame() {
    console.log('starting game55')
  }

  if (!fontsLoaded) return <AppLoading />

  if (number) {
    return <Game number={number} logs={logs} setLogs={setLogs} setNumber={setNumber} />
  } else {

    return (
      <Start onConfirmNumber={startGame} setNumber={setNumber} />
    );
  }
}

