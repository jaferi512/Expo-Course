import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const Page = () => {
    const {id} = useLocalSearchParams<{id: string}>();
  return (
        <View style={styles.container}>
          <Text style={styles.title}>Details {id}</Text>
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