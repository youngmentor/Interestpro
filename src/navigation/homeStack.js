import { StyleSheet, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import TabNav from "./tabNav";
import { Icon } from "react-native-elements";
const Stack = createStackNavigator();
function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DashBoard"
        component={TabNav}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
export default HomeStack;
