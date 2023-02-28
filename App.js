import { StyleSheet, View, Text, ScrollView } from 'react-native';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={styles.scroll}><Home /></ScrollView>
      <Footer />
      <View style={styles.content}>
        {/* to form */}
        <View style={styles.list}>

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scroll: {
    backgroundColor: 'black'
  },
})