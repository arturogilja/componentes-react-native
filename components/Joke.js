import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const Joke = ({ jokeText, newJoke, children }) => {
  return (
    <View style={styles.container}>
      {children}
      <Text style={styles.text}> {jokeText} </Text>
      <Button title="Nuevo Chiste" onPress={newJoke} />
    </View>
  )
}

export default Joke

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },

  text: {
    fontSize: 20,
    padding: 15,
    textAlign: 'center',
  },
})
