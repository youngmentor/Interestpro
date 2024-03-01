import { Text, View, SafeAreaView } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

function Profile({ navigation }) {
  return (
    <SafeAreaView>
      <View
        style={{
          padding: 20,
          marginTop: Platform.OS === "ios" ? 0 : 30,
        }}
      >
        <Text style={{ fontSize: 25, color: "#181834" }}>Account Setting</Text>
        <View style={{ gap: 20, marginTop: 50 }}>
          <View
            style={{
              width: 300,
              height: 40,
              flexDirection: "row",
              alignItems: "center",
              gap: 20,
            }}
          >
            <MaterialCommunityIcons name="update" color={"black"} size={25} />
            <Text
              style={{ fontSize: 18 }}
              onPress={() => navigation.navigate("PersonalSetting")}
            >
              Personal Settings
            </Text>
          </View>
          <View
            style={{
              width: 300,
              height: 40,
              flexDirection: "row",
              alignItems: "center",
              gap: 20,
            }}
          >
            <Feather name="arrow-up-right" color={"black"} size={25} />
            <Text
              style={{ fontSize: 18 }}
              onPress={() => navigation.navigate("WithdrawalSetting")}
            >
              Widthdrawal Setting
            </Text>
          </View>
          <View
            style={{
              width: 300,
              height: 40,
              flexDirection: "row",
              alignItems: "center",
              gap: 20,
            }}
          >
            <MaterialIcons name="security" color={"black"} size={25} />
            <Text
              style={{ fontSize: 18 }}
              onPress={() => navigation.navigate("passwordsecurity")}
            >
              Password/Security
            </Text>
          </View>
          <View
            style={{
              width: 300,
              height: 40,
              flexDirection: "row",
              alignItems: "center",
              gap: 20,
            }}
          >
            <Feather name="settings" color={"black"} size={25} />
            <Text style={{ fontSize: 18 }}>Other Settings</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Profile;
