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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  green: {
    flex: 2,
    width: '100%',
    backgroundColor: 'green'
  },
  red: {
    flex: 1,
    width: '100%',
    backgroundColor: 'red'
  },
  blue: {
    flex: 4,
    width: '100%',
    backgroundColor: 'blue'
  }
});
