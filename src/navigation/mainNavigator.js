import { StyleSheet, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import AuthStack from "./authStack";
import TabNav from "./tabNav";
import HomeStack from "./homeStack";

const Stack = createStackNavigator();
function MainNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AuthStack"
        component={AuthStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TabNav"
        component={TabNav}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="HomeStack"
        component={HomeStack}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
export default MainNavigator;
const styles = StyleSheet.create({});
