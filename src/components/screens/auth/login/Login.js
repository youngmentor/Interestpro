import React, { useState } from "react";
import {
  Animated,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import DButton from "../../../button/Button";
import Icon from "react-native-vector-icons/FontAwesome";
import { CommonActions } from "@react-navigation/native";
function Login({ navigation }) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (text) => {
    setInputValue(text);
  };
  // const handleButtonPress = () => {
  //   Alert.alert("Input Value", inputValue);
  // };
  const handleTogglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };
  return (
    <Animated.View style={{ justifyContent: "center", gap: 20 }}>
      <View
        style={{ padding: 20, height: 500, justifyContent: "center", gap: 20 }}
      >
        <Text style={{ fontSize: 40, fontWeight: 700 }}>Log In</Text>
        <View style={{ flexDirection: "row", gap: 5 }}>
          <Text style={{ fontSize: 15, color: "grey" }}>
            Don't have an account?
          </Text>
          <Text
            style={{
              color: "rgb(52, 117, 208)",
              textDecorationLine: "underline",
              fontSize: 15,
            }}
            onPress={() => navigation.navigate("Signup")}
          >
            Create account
          </Text>
        </View>
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
          onChangeText={handleInputChange}
        />
        <View style={{ position: "relative" }}>
          <TextInput
            style={{
              height: 50,
              borderColor: "gray",
              borderWidth: 1,
              padding: 10,
              marginTop: 20,
              borderRadius: 8,
              fontSize: 18,
              paddingRight: 40,
            }}
            placeholderTextColor="grey"
            placeholder="Password"
            secureTextEntry={!isPasswordVisible}
            onChangeText={setInputValue}
          />
          <TouchableOpacity
            style={{
              position: "absolute",
              top: 35,
              right: 10,
            }}
            onPress={handleTogglePasswordVisibility}
          >
            <Icon
              name={isPasswordVisible ? "eye-slash" : "eye"}
              size={20}
              color="grey"
            />
          </TouchableOpacity>
        </View>
        <DButton
          onPress={() => {
            navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [
                  {
                    name: "HomeStack",
                    // params: {
                    //   screen: "login",
                    // },
                  },
                ],
              })
            );
          }}
        >
          Continue
        </DButton>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              color: "rgb(52, 117, 208)",
              textDecorationLine: "underline",
            }}
            onPress={() => navigation.navigate("ForgotPassword")}
          >
            Forgot Password?
          </Text>
        </View>
      </View>
    </Animated.View>
  );
}

export default Login;
