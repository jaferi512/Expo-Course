import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Page = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login/Registration Screen</Text>
    </View>
  )
}

export default Page

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
  },
})