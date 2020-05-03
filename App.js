import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TextInputComponent, TextInput } from 'react-native'
import Foto from './components/Foto'
import Joke from './components/Joke'

export default function App() {
  //State para ejemplificar componente Foto
  const [idImage, setIdImage] = useState(1)
  const [urlImage, setUrlImage] = useState(`https://randomuser.me/portraits/men/${idImage}.jpg`)

  //State para ejemplificar componente Joke
  const [idJoke, setIdJoke] = useState(1)
  const [jokeText, setJokeText] = useState('')
  const [name, onChangeName] = useState('Chuck')

  //UseEffect para modificar el URL de la imagen al cambiar el ID
  useEffect(() => {
    setUrlImage(`https://randomuser.me/portraits/men/${idImage}.jpg`)
  }, [idImage])

  //UseEffect para hacer una petición HTTP cuando cambie el ID del chiste
  useEffect(() => {
    fetch(`https://api.icndb.com/jokes/${idJoke}?firstName=${name}`)
      .then((res) => res.json())
      .then((res) => {
        setJokeText(res.value.joke)
      })
  }, [idJoke])

  //Funcion que se pasa como Prop al componente Foto
  const toggleImage = () => {
    setIdImage(idImage + 1)
  }

  //Funcion que se pasa como Prop al componente Joke
  const newJoke = () => {
    if (idJoke + 1 > 6) setIdJoke(1)
    else setIdJoke(idJoke + 1)
  }

  return (
    <View style={styles.container}>
      <Foto url={urlImage} texto={urlImage} toggleImage={toggleImage} />
      <Joke jokeText={jokeText} newJoke={newJoke}>
        <TextInput style={styles.input} onChangeText={(text) => onChangeName(text)} value={name} />
      </Joke>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    padding: 5,
    borderColor: '#000',
    borderWidth: 1,
    width: 400,
  },
})
