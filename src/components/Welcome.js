import { View, Text, Animated, Image } from "react-native";
import DButton from "./button/Button";
import React, { useEffect, useRef } from "react";
const WelcomePage = ({ navigation }) => {
  const image1Y = useRef(new Animated.Value(-100)).current;
  const image2Y = useRef(new Animated.Value(-100)).current;
  const image3Y = useRef(new Animated.Value(-100)).current;

  useEffect(() => {
    // Define the animation configurations
    const animationConfig = {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    };

    // Use Animated.timing for each image
    Animated.timing(image1Y, animationConfig).start();
    Animated.timing(image2Y, { ...animationConfig, delay: 5000 }).start();
    Animated.timing(image3Y, { ...animationConfig, delay: 7000 }).start();
  }, []);
  return (
    <Animated.View style={{ flex: 1, backgroundColor: "#181834", padding: 20 }}>
      <View style={{ height: 400 }}>
        <Animated.Image
          source={require("../../assets/image1.jpeg")}
          style={{
            width: 100,
            height: 100,
            borderRadius: 20,
            position: "absolute",
            top: -10,
            left: 130,
            transform: [
              { translateX: 20 },
              { translateY: 50 },
              { rotate: "-50deg" },
            ],
          }}
        />
        <Animated.Image
          source={require("../../assets/image2.jpeg")}
          style={{
            width: 100,
            height: 100,
            borderRadius: 20,
            position: "absolute",
            top: 50,
            left: -40,
            transform: [
              { translateX: 50 },
              { translateY: 50 },
              { rotate: "20deg" },
            ],
          }}
        />
        <Animated.Image
          source={require("../../assets/image3.jpeg")}
          style={{
            width: 180,
            height: 180,
            borderRadius: 20,
            position: "absolute",
            top: 130,
            left: 70,
            transform: [
              { translateX: 50 },
              { translateY: 50 },
              { rotate: "-25deg" },
            ],
          }}
        />
      </View>
      <Text style={{ fontSize: 40, color: "white", fontWeight: 700 }}>
        Welcome to
      </Text>
      <Text
        style={{
          fontSize: 30,
          color: "white",
          fontWeight: 700,
          color: "#FFCD79",
        }}
      >
        Interestpro
      </Text>
      <Text style={{ color: "white", fontSize: 18, marginTop: 10 }}>
        Let's get you started
      </Text>
      <DButton onPress={() => navigation.navigate("Login")}>Next</DButton>
    </Animated.View>
  );
};

export default WelcomePage;
