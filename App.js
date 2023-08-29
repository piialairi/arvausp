import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

let randomNumber;
let guesses;

export default function App() {
  const [number, setNumber] = useState(0)
  const [text, setText] = useState()

  const start = () => {
    setText('Guess a number between 1-100');
    randomNumber = Math.floor(Math.random() * 100) + 1;
    guesses = 0;
  }

  useEffect(() => {
    start();
  }, [])

  const game = () => {

    const isNumber = Number(number)

    if (isNumber < randomNumber) {
      setText('Your guess ' + isNumber + ' is too low')
      guesses++
    } else if (isNumber > randomNumber) {
      setText('Your guess ' + isNumber + ' is too high')
      guesses++
    } else {
      guesses++
      Alert.alert('You guessed the number in ' + guesses + ' guesses')
      start()
    }
    setNumber(0)
  }


  return (
    <View style={styles.container}>
      <View>
        <Text>{text}</Text>
      </View>
      <View>
        <TextInput
          keyboardType='numeric'
          style={{ width: 200, borderColor: 'grey', borderWidth: 1 }}
          onChangeText={text => setNumber(text)}
        />
        <View>
          <Button onPress={game} title='Make guess'></Button>
        </View>
      </View >
      <StatusBar style="auto" />
    </View >
  );

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


//Math.floor(Math.random() * 100) + 1
//Sovellus arpoo satunnaisen kokonaisluvun 1-100 väliltä.
//Käyttäjä syöttää arvauksen teksti kenttään ja painaa 'Make guess'- painketta
//Ohjelma tarkistaa arvauksen vertaamalla sitä satunnaislukuun ja kertoo 
//onko arvaus liian pieni tai suuri. Jos arvaus on oikein sovellus näyttää arvausten lukumäärän ja peli loppuu.