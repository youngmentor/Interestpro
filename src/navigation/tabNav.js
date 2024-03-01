import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../components/screens/HomeScreen";
import DashboardScreen from "../components/screens/DashboardScreen";
import Icon from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Settings from "../components/screens/Settings";
import ProfileNavigator from "./profileStack";

const Tab = createBottomTabNavigator();
function TabNav() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: [
          {
            height: Platform.OS === "android" ? 60 : 80,
            marginBottom: Platform.OS === "android" ? 10 : undefined,
          },
          null,
        ],
      }}
    >
      <Tab.Screen
        name="Home2"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={26} />
          ),
          indicatorStyle: {
            borderTopColor: "green",
            borderTopWidth: 2,
          },
        }}
      />
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Dashboard",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="dashboard" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="SettingsScreen"
        component={ProfileNavigator}
        options={{
          headerShown: false,
          tabBarLabel: "Setting",
          tabBarIcon: ({ color }) => (
            <Icon name="settings" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileNavigator"
        component={Settings}
        options={{
          headerShown: false,
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNav;
<Icon name="format-align-justify" size={30} color={"white"} />;
