import React from "react";
import { View, Text, SafeAreaView, ScrollView, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Video, ResizeMode } from "expo-av";
import TradingViewWidget from "./TradingView";
const Stack = createStackNavigator();
function HomeScreen() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          padding: 10,
          gap: 20,
          marginTop: Platform.OS === "ios" ? 0 : 30,
        }}
      >
        <View>
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>
            Welcome Suliton
          </Text>
        </View>
        <View
          style={{
            width: Platform.OS === "ios" ? 370 : 340,
            height: 70,
            backgroundColor: "#181834",
            justifyContent: "center",
            padding: 20,
            borderRadius: 8,
          }}
        >
          <Text style={{ color: "white", fontSize: 18 }}>
            Welcome to Interestpro
          </Text>
        </View>
        <ScrollView>
          <View
            style={{
              width: Platform.OS === "ios" ? 370 : 340,
              backgroundColor: "white",
              padding: 20,
              gap: 20,
            }}
          >
            <Text>Account Summary</Text>
            <View
              style={{
                width: Platform.OS === "ios" ? 330 : 300,
                borderWidth: 0.5,
                height: 120,
                borderColor: "lightgrey",
                borderRadius: 8,
                padding: 20,
                flexDirection: "row",
                gap: 40,
              }}
            >
              <View
                style={{
                  gap: 5,
                }}
              >
                <Text style={{ fontSize: 18, color: "grey" }}>
                  Account Balance
                </Text>
                <Text style={{ fontSize: 18 }}>$ 800.0</Text>
                <Text style={{ fontSize: 18 }}>0.01692422BTC</Text>
              </View>
              <Image
                source={require("../../../assets/linechart.webp")}
                style={{ width: 100, height: 80 }}
              />
            </View>
            <View
              style={{
                width: Platform.OS === "ios" ? 330 : 300,
                borderWidth: 0.5,
                height: 120,
                borderColor: "lightgrey",
                borderRadius: 8,
                padding: 20,
                flexDirection: "row",
                gap: 40,
              }}
            >
              <View
                style={{
                  gap: 5,
                }}
              >
                <Text style={{ fontSize: 18, color: "grey" }}>
                  Total Profit
                </Text>
                <Text style={{ fontSize: 18 }}>$ 800.0</Text>
                <Text style={{ fontSize: 18 }}>0.01692422BTC</Text>
              </View>
              <Image
                source={require("../../../assets/linechart.webp")}
                style={{ width: 100, height: 80 }}
              />
            </View>
            <TradingViewWidget />
            <View
              style={{
                width: Platform.OS === "ios" ? 330 : 300,
                borderWidth: 0.5,
                height: 120,
                borderColor: "lightgrey",
                borderRadius: 8,
                padding: 20,
                flexDirection: "row",
                gap: 40,
              }}
            >
              <View
                style={{
                  gap: 5,
                }}
              >
                <Text style={{ fontSize: 18, color: "grey" }}>Bonus</Text>
                <Text style={{ fontSize: 18 }}>$ 800.0</Text>
                <Text style={{ fontSize: 18 }}>0.01692422BTC</Text>
              </View>
              <Image
                source={require("../../../assets/linechart.webp")}
                style={{ width: 100, height: 80 }}
              />
            </View>
            <View
              style={{
                width: Platform.OS === "ios" ? 330 : 300,
                borderWidth: 0.5,
                height: 120,
                borderColor: "lightgrey",
                borderRadius: 8,
                padding: 20,
                flexDirection: "row",
                gap: 40,
              }}
            >
              <View
                style={{
                  gap: 5,
                }}
              >
                <Text style={{ fontSize: 18, color: "grey" }}>
                  Referral Bonus
                </Text>
                <Text style={{ fontSize: 18 }}>$ 800.0</Text>
                <Text style={{ fontSize: 18 }}>0.01692422BTC</Text>
              </View>
              <Image
                source={require("../../../assets/linechart.webp")}
                style={{ width: 100, height: 80 }}
              />
            </View>
            <View
              style={{
                width: Platform.OS === "ios" ? 330 : 300,
                borderWidth: 0.5,
                height: 120,
                borderColor: "lightgrey",
                borderRadius: 8,
                padding: 20,
                flexDirection: "row",
                gap: 40,
              }}
            >
              <View
                style={{
                  gap: 5,
                }}
              >
                <Text style={{ fontSize: 18, color: "grey" }}>
                  Total Deposits
                </Text>
                <Text style={{ fontSize: 18 }}>$ 800.0</Text>
                <Text style={{ fontSize: 18 }}>0.01692422BTC</Text>
              </View>
              <Image
                source={require("../../../assets/linechart.webp")}
                style={{ width: 100, height: 80 }}
              />
            </View>
            <View
              style={{
                width: Platform.OS === "ios" ? 330 : 300,
                borderWidth: 0.5,
                height: 120,
                borderColor: "lightgrey",
                borderRadius: 8,
                padding: 20,
                flexDirection: "row",
                gap: 40,
              }}
            >
              <View
                style={{
                  gap: 5,
                }}
              >
                <Text style={{ fontSize: 18, color: "grey" }}>
                  Total Widthdrawal
                </Text>
                <Text style={{ fontSize: 18 }}>$ 800.0</Text>
                <Text style={{ fontSize: 18 }}>0.01692422BTC</Text>
              </View>
              <Image
                source={require("../../../assets/linechart.webp")}
                style={{ width: 100, height: 80 }}
              />
            </View>
            <View
              style={{
                width: Platform.OS === "ios" ? 330 : 300,
                borderWidth: 0.5,
                height: 120,
                borderColor: "lightgrey",
                borderRadius: 8,
                padding: 20,
                flexDirection: "row",
                gap: 40,
              }}
            >
              <View
                style={{
                  gap: 5,
                }}
              >
                <Text style={{ fontSize: 18, color: "grey" }}>
                  Total Investmesnt
                </Text>
                <Text style={{ fontSize: 18 }}>$ 800.0</Text>
                <Text style={{ fontSize: 18 }}>0.01692422BTC</Text>
              </View>
              <Image
                source={require("../../../assets/linechart.webp")}
                style={{ width: 100, height: 80 }}
              />
            </View>
            <View
              style={{
                width: Platform.OS === "ios" ? 330 : 300,
                borderWidth: 0.5,
                height: 120,
                borderColor: "lightgrey",
                borderRadius: 8,
                padding: 20,
                flexDirection: "row",
                gap: 40,
              }}
            >
              <View
                style={{
                  gap: 5,
                }}
              >
                <Text style={{ fontSize: 18, color: "grey" }}>
                  Account Balance
                </Text>
                <Text style={{ fontSize: 18 }}>$ 800.0</Text>
                <Text style={{ fontSize: 18 }}>0.01692422BTC</Text>
              </View>
              <Image
                source={require("../../../assets/linechart.webp")}
                style={{ width: 100, height: 80 }}
              />
            </View>
            <Text style={{ fontSize: 20, color: "#181834", marginTop: 20 }}>
              Active Plans(s) (1)
            </Text>
            <View
              style={{
                width: Platform.OS === "ios" ? 330 : 300,
                borderWidth: 0.5,
                height: 200,
                borderColor: "lightgrey",
                borderRadius: 8,
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
              }}
            >
              <Text style={{ fontSize: 18 }}>Your trading session end in </Text>
              <Text style={{ color: "grey", fontSize: 18 }}>28 days</Text>
            </View>
            <Video
              ref={video}
              style={{
                width: Platform.OS === "ios" ? 330 : 300,
                height: 200,
                marginBottom: 120,
              }}
              source={{
                uri: "https://whitebitcrypfield-dashboard.vercel.app/assets/crypt-05pC6G0d.mp4",
              }}
              useNativeControls={false}
              resizeMode={ResizeMode.CONTAIN}
              isLooping
              shouldPlay={true}
              onPlaybackStatusUpdate={(status) => setStatus(() => status)}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
