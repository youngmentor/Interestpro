import React from "react";
import { Text, View, TextInput, Animated } from "react-native";
import DButton from "../../../button/Button";

function ForgotPassword({ navigation }) {
  return (
    <Animated.View>
      <View style={{ padding: 20, marginTop: 100, gap: 20 }}>
        <Text style={{ fontSize: 40, fontWeight: 700 }}>Forgot</Text>
        <Text style={{ fontSize: 40, fontWeight: 700 }}>password?</Text>
        <Text style={{ color: "grey", fontSize: 16 }}>
          If you want to recover your account password. Open your e-mail and
          follow the link to create a new password.
        </Text>
        <TextInput
          style={{
            height: 50,
            borderColor: "gray",
            borderWidth: 1,
            padding: 10,
            marginTop: 20,
            borderRadius: 8,
            fontSize: 18,
          }}
          placeholderTextColor="grey"
          placeholder="E-mail"
          keyboardType="email-address"
        />
        <DButton>Continue</DButton>
      </View>
    </Animated.View>
  );
}

export default ForgotPassword;
