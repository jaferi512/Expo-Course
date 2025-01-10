import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Link, useRouter } from 'expo-router';

const Page = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Splash Screen</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/register')}
      >
        <Text style={styles.buttonText}>Goto Registration/Login</Text>
      </TouchableOpacity>
      {/* add replace instead of push */}
      <Link href={'/(tabs)/one'} asChild replace>
        <Button title="Open Tabs" />
      </Link>
      <Link href={'/modal'} asChild>
        <Button title="Link Navigate to modal" />
      </Link>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
  },
  button: {
    padding: 10,
    backgroundColor: 'lightgreen',
    margin: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
  },
});
