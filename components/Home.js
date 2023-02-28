import { View, Text, StyleSheet } from "react-native";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style= {styles.homeText}>Hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  homeText: {
    color: 'white'
  }
})
 
export default Home;