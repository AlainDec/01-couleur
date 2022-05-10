import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.green}>
      </View>
      <View style={styles.red}>
      </View>
      <View style={styles.blue}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  green: {
    flex: 2,
    backgroundColor: 'green'
  },
  red: {
    flex: 1,
    backgroundColor: 'red'
  },
  blue: {
    flex: 4,
    backgroundColor: 'blue'
  }
});
