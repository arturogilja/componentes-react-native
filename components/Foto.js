import React from 'react'
import { Image, View, Button, Text, StyleSheet } from 'react-native'

const Foto = ({ url, texto, toggleImage }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.imagen} source={{ uri: url }} />
      <Text> {texto} </Text>
      <Button onPress={toggleImage} title="Cambiar Imagen" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  imagen: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
})

export default Foto
