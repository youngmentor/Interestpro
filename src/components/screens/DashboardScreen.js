import React from "react";
import { View, Text, SafeAreaView, ScrollView, Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Fontisto from "react-native-vector-icons/Fontisto";
import Feather from "react-native-vector-icons/Feather";

const transactions = [
  { amount: "$200", type: "transfer", status: "Failed", date: "20/03/2024" },
  { amount: "$150", type: "payment", status: "Success", date: "21/03/2024" },
  { amount: "$300", type: "transfer", status: "Pending", date: "22/03/2024" },
  { amount: "$120", type: "payment", status: "Success", date: "23/03/2024" },
  { amount: "$180", type: "transfer", status: "Failed", date: "24/03/2024" },
  { amount: "$250", type: "payment", status: "Success", date: "25/03/2024" },
  { amount: "$170", type: "transfer", status: "Pending", date: "26/03/2024" },
  { amount: "$210", type: "payment", status: "Failed", date: "27/03/2024" },
  { amount: "$280", type: "transfer", status: "Success", date: "28/03/2024" },
  { amount: "$190", type: "payment", status: "Pending", date: "29/03/2024" },
  { amount: "$200", type: "transfer", status: "Failed", date: "20/03/2024" },
  { amount: "$150", type: "payment", status: "Success", date: "21/03/2024" },
  { amount: "$300", type: "transfer", status: "Pending", date: "22/03/2024" },
  { amount: "$120", type: "payment", status: "Success", date: "23/03/2024" },
  { amount: "$180", type: "transfer", status: "Failed", date: "24/03/2024" },
  { amount: "$250", type: "payment", status: "Success", date: "25/03/2024" },
  { amount: "$170", type: "transfer", status: "Pending", date: "26/03/2024" },
  { amount: "$210", type: "payment", status: "Failed", date: "27/03/2024" },
  { amount: "$280", type: "transfer", status: "Success", date: "28/03/2024" },
  { amount: "$190", type: "payment", status: "Pending", date: "29/03/2024" },
];
function DashboardScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <ScrollView> */}
      <View
        style={{
          marginTop: Platform.OS === "ios" ? 0 : 30,
          width: Platform.OS === "ios" ? 395 : 350,
          height: Platform.OS === "ios" ? 200 : 220,
          backgroundColor: "#181834",
          borderBottomLeftRadius: 30,
          marginLeft: Platform.OS === "ios" ? 0 : 5,
          padding: 20,
          gap: 20,
        }}
      >
        <View style={{ gap: 10 }}>
          <Text style={{ fontSize: 20, color: "white" }}>Hi Suliton</Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontSize: 15, color: "white" }}>
              Account Blance:
            </Text>
          </View>
          <Text style={{ fontSize: 25, color: "white" }}>$800.00</Text>
        </View>
        <View
          style={{
            height: 60,
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
            gap: 20,
            padding: 10,
          }}
        >
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              gap: 5,
            }}
          >
            <Ionicons name="add" color={"white"} size={25} />
            <Text style={{ fontSize: 15, color: "white" }}>Deposits</Text>
          </View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              gap: 5,
            }}
          >
            <Fontisto name="arrow-swap" color={"white"} size={20} />
            <Text style={{ fontSize: 15, color: "white" }}>Transfer</Text>
          </View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              gap: 5,
            }}
          >
            <Feather name="arrow-up-right" color={"white"} size={25} />
            <Text style={{ fontSize: 15, color: "white" }}>Withdraw</Text>
          </View>
        </View>
      </View>
      <ScrollView
        style={{
          padding: 20,
          marginBottom: 60,
        }}
      >
        <Text
          style={{
            fontSize: 18,
          }}
        >
          Transaction History
        </Text>
        <View
          style={{
            // flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ width: 70 }}>Amount</Text>
            <Text style={{ width: 100 }}>Payment mode</Text>
            <Text
              style={{
                width: 60,
                textAlign: "center",
              }}
            >
              Status
            </Text>
            <Text style={{ width: 100 }}>Date created</Text>
          </View>
          <View>
            {transactions.map((transaction, index) => (
              <View
                key={index}
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  marginTop: 20,
                }}
              >
                <Text style={{ width: 70 }}>{transaction.amount}</Text>
                <Text style={{ width: 70, textAlign: "center" }}>
                  {transaction.type}
                </Text>
                <Text style={{ width: 70, textAlign: "center" }}>
                  {transaction.status}
                </Text>
                <Text style={{ width: 80 }}>{transaction.date}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}

export default DashboardScreen;
//
