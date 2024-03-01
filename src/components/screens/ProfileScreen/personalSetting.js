import { Text, View, SafeAreaView, TextInput } from "react-native";
import DButton from "../../button/Button";

function PersonalSetting() {
  return (
    <SafeAreaView>
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 25, color: "#181834" }}>Personal Setting</Text>
        <View style={{ marginTop: 40 }}>
          <View style={{ gap: 20 }}>
            <Text style={{ fontSize: 15 }}>Full Name</Text>
            <TextInput
              placeholder="Your Full Name"
              style={{
                height: 50,
                borderColor: "gray",
                borderWidth: 1,
                padding: 10,
                borderRadius: 8,
                fontSize: 18,
              }}
            />
          </View>
          <View style={{ gap: 10, marginTop: 10 }}>
            <Text style={{ fontSize: 15 }}>Email</Text>
            <TextInput
              placeholder="Email"
              style={{
                height: 50,
                borderColor: "gray",
                borderWidth: 1,
                padding: 10,
                borderRadius: 8,
                fontSize: 18,
              }}
            />
          </View>
          <View style={{ gap: 20, marginTop: 10 }}>
            <Text style={{ fontSize: 15 }}>User Name</Text>
            <TextInput
              placeholder="Username"
              style={{
                height: 50,
                borderColor: "gray",
                borderWidth: 1,
                padding: 10,
                borderRadius: 8,
                fontSize: 18,
              }}
            />
          </View>
          <View style={{ gap: 20, marginTop: 10 }}>
            <Text style={{ fontSize: 15 }}>Phone Number</Text>
            <TextInput
              placeholder="Phone number"
              style={{
                height: 50,
                borderColor: "gray",
                borderWidth: 1,
                padding: 10,
                borderRadius: 8,
                fontSize: 18,
              }}
            />
          </View>
          <DButton title="Submit" onPress={() => {}} style={{ zIndex: 100 }}>
            Update
          </DButton>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default PersonalSetting;
