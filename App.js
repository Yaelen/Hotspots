import { StyleSheet, View } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import Home from './pages/Home';

export default function App() {
  return (
          <Home/>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});