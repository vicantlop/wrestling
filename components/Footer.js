import { StyleSheet, Text, View, Image } from "react-native";

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Image source={require('../assets/book.png')} style={{width: 25, height: 25}}/>
      <Image source={require('../assets/speech-bubbles-comment-option.png')} style={{width: 25, height: 25}}/>
      <Image source={require('../assets/user-shape.png')} style={{width: 25, height: 25}}/>
      <Image source={require('../assets/font-selection-editor.png')} style={{width: 25, height: 25}}/>
      <Image source={require('../assets/calendar-page-empty.png')} style={{width: 25, height: 25}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flex: 1/8,
    flexDirection: 'row',
    backgroundColor: 'green',
    // padding: 5,
    // paddingTop: 0,
    paddingBottom: 20,
    width: '100%',
    justifyContent: "space-evenly",
    alignItems: 'center'
  }
})

export default Footer;