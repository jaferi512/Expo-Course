import { Platform, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Link, Slot } from 'expo-router';

const Layout = () => {
  if (Platform.OS === 'web') {
    return(
      <div style={{flex: 1}}>
        <header>
          <div style={{display: 'flex', gap: 10, padding: 10, justifyContent:'center', alignItems:'center', backgroundColor:'lightblue'}}>
          <Link href={'/page1'} asChild> 
      <Pressable>
        <Text>Page1</Text>
      </Pressable>
      </Link>
      <Link href={'/page2'} asChild> 
      <Pressable>
        <Text>Page2</Text>
      </Pressable>
      </Link>
          </div>
      </header>
      <Slot />
    </div>

    )
  } else {
    return (
      <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen name='page1' options={{headerTitle:'News Feed', drawerLabel:'Feed'}} />
        <Drawer.Screen name='page2' options={{headerTitle:'Settings', drawerLabel:'Profile'}} />
      </Drawer>
    </GestureHandlerRootView>
    )
  }
}

export default Layout

const styles = StyleSheet.create({
  container: {
   flex:1,
   backgroundColor:'red',
  },
  button: {
    backgroundColor: "#007BFF",
    color: "#fff",
    borderRadius: "5px",
    cursor: "pointer",
  },
})