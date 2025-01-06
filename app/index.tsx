import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Link, useRouter } from 'expo-router'

const Page = () => {
  const router = useRouter();
  return (
    <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
      <Text>splash</Text>
      <TouchableOpacity onPress={() => router.push('/register')}>
        <Text>Goto Login</Text>
      </TouchableOpacity>
      {/* add replace instead of push */}
      <Link href={'/(tabs)/one'} asChild replace>
      <Button title='Link Navigate' />
      </Link>

      <Link href={'/modal'} asChild>
      <Button title='Link Navigate to modal' />
      </Link>
    </View>
  )
}

export default Page

const styles = StyleSheet.create({})