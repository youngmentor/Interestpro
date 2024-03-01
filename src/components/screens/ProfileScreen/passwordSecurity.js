import { Text, View, SafeAreaView, TextInput } from "react-native";
import DButton from "../../button/Button";
function PasswordSecurity() {
  return (
    <SafeAreaView>
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 25, color: "#181834" }}>Personal Setting</Text>
        <View style={{ marginTop: 40 }}>
          <View style={{ gap: 20 }}>
            <Text style={{ fontSize: 15 }}>Old Password</Text>
            <TextInput
              secureTextEntry={true}
              style={{
                height: 60,
                borderColor: "gray",
                borderWidth: 1,
                padding: 10,
                borderRadius: 8,
                fontSize: 18,
              }}
            />
          </View>
          <View style={{ gap: 10, marginTop: 10 }}>
            <Text style={{ fontSize: 15 }}>New Password</Text>
            <TextInput
              secureTextEntry={true}
              style={{
                height: 60,
                borderColor: "gray",
                borderWidth: 1,
                padding: 10,
                borderRadius: 8,
                fontSize: 18,
              }}
            />
          </View>
          <View style={{ gap: 20, marginTop: 10 }}>
            <Text style={{ fontSize: 15 }}>Confirm New Password</Text>
            <TextInput
              secureTextEntry={true}
              style={{
                height: 60,
                borderColor: "gray",
                borderWidth: 1,
                padding: 10,
                borderRadius: 8,
                fontSize: 18,
              }}
            />
          </View>
          <DButton title="Submit" onPress={() => {}}>
            Update
          </DButton>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default PasswordSecurity;
