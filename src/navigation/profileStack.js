import { StyleSheet, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import PersonalSetting from "../components/screens/ProfileScreen/personalSetting";
import Profile from "../components/screens/Profile";
import WithdrawalSetting from "../components/screens/ProfileScreen/withdrawalSetting";
import PasswordSecurity from "../components/screens/ProfileScreen/passwordSecurity";

const Stack = createStackNavigator();
function ProfileNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PersonalSetting"
        component={PersonalSetting}
        options={{ headerShown: true, headerTitle: "" }}
      />
      <Stack.Screen
        name="WithdrawalSetting"
        component={WithdrawalSetting}
        options={{ headerShown: true, headerTitle: "" }}
      />
      <Stack.Screen
        name="passwordsecurity"
        component={PasswordSecurity}
        options={{ headerShown: true, headerTitle: "" }}
      />
    </Stack.Navigator>
  );
}
export default ProfileNavigator;
const styles = StyleSheet.create({});
