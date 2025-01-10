import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Page = () => {
  return (
    <View>
      <Link href={'/'} replace asChild>
      <Button title='Log Out' />
      </Link>
      <Link href={'/(tabs)/(one)/details'} asChild>
      <Button title='Open Details' />
      </Link>

      <Link href={'/(tabs)/(one)/34'} asChild>
      <Button title='Open Details 54' />
      </Link>

      <Link href={'/(aux)/disclaimer'} asChild>
      <Button title='Open Disclaimer' />
      </Link>
    </View>
  )
}

export default Page

const styles = StyleSheet.create({})