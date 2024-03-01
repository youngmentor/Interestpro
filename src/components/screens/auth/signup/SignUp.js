import React, { useState } from "react";
import {
  Image,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Animated,
} from "react-native";
import DButton from "../../../button/Button";
import Icon from "react-native-vector-icons/FontAwesome";
import { CheckBox } from "react-native-elements";
function Login({ navigation }) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isChecked, setChecked] = useState(false);
  const [isChecked2, setChecked2] = useState(false);

  const handleCheck = () => {
    setChecked(!isChecked);
  };
  const handleCheck2 = () => {
    setChecked2(!isChecked2);
  };
  const handleInputChange = (text) => {
    setInputValue(text);
  };
  const handleButtonPress = () => {
    Alert.alert("Input Value", inputValue);
  };
  const handleTogglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };
  return (
    <Animated.View style={{ justifyContent: "center", gap: 20, marginTop: 50 }}>
      <View
        style={{ padding: 20, height: 600, justifyContent: "center", gap: 20 }}
      >
        <Text style={{ fontSize: 40, fontWeight: 700 }}>Create account</Text>
        <View style={{ flexDirection: "row", gap: 5 }}>
          <Text style={{ fontSize: 15, color: "grey" }}>
            Already have an account?
          </Text>
          <Text
            style={{
              color: "rgb(52, 117, 208)",
              textDecorationLine: "underline",
              fontSize: 15,
            }}
            onPress={() => navigation.navigate("Login")}
          >
            Log in
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
          placeholder="Username"
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
        <CheckBox
          title={
            <View style={{ flexDirection: "row", gap: 5 }}>
              <Text>I agree to the</Text>
              <Text style={{ color: "rgb(52, 117, 208)" }}>User agreement</Text>
              <Text>and</Text>
              <Text style={{ color: "rgb(52, 117, 208)" }}>Privacy policy</Text>
            </View>
          }
          checked={isChecked}
          onPress={handleCheck}
          containerStyle={{
            backgroundColor: "transparent",
            borderWidth: 0,
            marginLeft: 0,
          }}
        />
        <CheckBox
          title={
            <View style={{ flexDirection: "column", justifyContent: "center" }}>
              <Text>I hereby confirm that I am neither a citizen nor</Text>
              <View style={{ flexDirection: "row" }}>
                <Text>a resident of the following countries:</Text>
                <Icon
                  name="info-circle"
                  type="font-awesome"
                  color="grey"
                  size={20}
                />
              </View>
            </View>
          }
          checked={isChecked2}
          onPress={handleCheck2}
          containerStyle={{
            backgroundColor: "transparent",
            borderWidth: 0,
            marginLeft: 0,
          }}
        />
        <DButton>Continue</DButton>
      </View>
    </Animated.View>
  );
}

export default Login;
