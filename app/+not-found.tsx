import { Stack } from 'expo-router';
import { StyleSheet } from 'react-native';


export default function NotFoundScreen() {
  return (
      <>
        <Stack.Screen options={{title: 'Oops!'}}/>
        <h1>This screen doesn't exist.</h1>
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
