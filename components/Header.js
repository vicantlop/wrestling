import { StyleSheet, Text, View } from "react-native";

const header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Poway Wrestling</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 38,
    paddingLeft: 10,
    backgroundColor: 'green',
    alignItems: 'left',
    justifyContent: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
  }
})
 
export default header;