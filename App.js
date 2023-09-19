import React from "react";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View, SafeAreaView } from "react-native";

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.upper_view_container}>
        <Text>Üst Ekran Denemesi</Text>
      </View>
      <View style={styles.bottom_view_container}>
        <Text>Alt Ekran Denemesi</Text>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
container:{
  flex:1,
},
upper_view_container:{
  flex:1,
  backgroundColor:'purple',
},
bottom_view_container:{
  flex:1,
  backgroundColor:'pink',
},
});
export default App;
