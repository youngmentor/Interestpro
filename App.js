import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import MainNavigator from "./src/navigation/mainNavigator";
const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
}
export default App;
const styles = StyleSheet.create({});
