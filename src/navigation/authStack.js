import { StyleSheet, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../components/screens/auth/login/Login";
import SignUp from "../components/screens/auth/signup/SignUp";
import WelcomePage from "../components/Welcome";
import ForgotPassword from "../components/screens/auth/forgotpassword/ForgotPassword";
import React from "react";
const Stack = createStackNavigator();
function AuthStack({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={WelcomePage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: true,
          headerTitle: "",
        }}
      />
      <Stack.Screen
        name="Signup"
        component={SignUp}
        options={{ headerShown: true, headerTitle: "" }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
}
export default AuthStack;
const styles = StyleSheet.create({});
