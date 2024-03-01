import { Text, View, SafeAreaView, TextInput, ScrollView } from "react-native";
import DButton from "../../button/Button";
function WithdrawalSetting() {
  return (
    <SafeAreaView style={{ flex: 1, height: "100%" }}>
      <ScrollView style={{ padding: 20 }}>
        <Text style={{ fontSize: 25, color: "#181834" }}>Personal Setting</Text>
        <View style={{ marginTop: 40 }}>
          <View style={{ gap: 20 }}>
            <Text style={{ fontSize: 15, color: "black", fontWeight: 500 }}>
              Bank Name
            </Text>
            <TextInput
              placeholder="Bank name"
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
            <Text style={{ fontSize: 15, color: "black", fontWeight: 500 }}>
              Account Name
            </Text>
            <TextInput
              placeholder="Account name"
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
            <Text style={{ fontSize: 15, color: "black", fontWeight: 500 }}>
              Account Number
            </Text>
            <TextInput
              placeholder="Account number"
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
            <Text style={{ fontSize: 15, color: "black", fontWeight: 500 }}>
              Swift Code
            </Text>
            <TextInput
              placeholder="Swift code"
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
            <Text style={{ fontSize: 15, color: "black", fontWeight: 500 }}>
              Bitcoin
            </Text>
            <TextInput
              placeholder=" Enter Bitcoin Address"
              style={{
                height: 50,
                borderColor: "gray",
                borderWidth: 1,
                padding: 10,
                borderRadius: 8,
                fontSize: 18,
              }}
            />
            <Text style={{ color: "grey" }}>
              Enter your Bitcoin Address that will be used to withdraw your
              funds
            </Text>
          </View>
          <View style={{ gap: 20, marginTop: 10 }}>
            <Text style={{ fontSize: 15, color: "black", fontWeight: 500 }}>
              Etherum
            </Text>
            <TextInput
              placeholder="Enter Etherum Address"
              style={{
                height: 50,
                borderColor: "gray",
                borderWidth: 1,
                padding: 10,
                borderRadius: 8,
                fontSize: 18,
              }}
            />
            <Text style={{ color: "grey" }}>
              Enter your Ethereum Address that will be used to withdraw your
              funds
            </Text>
          </View>
          <View style={{ gap: 20, marginTop: 10 }}>
            <Text style={{ fontSize: 15, color: "black", fontWeight: 500 }}>
              Litecoin
            </Text>
            <TextInput
              placeholder="Enter Litecoin Address"
              style={{
                height: 50,
                borderColor: "gray",
                borderWidth: 1,
                padding: 10,
                borderRadius: 8,
                fontSize: 18,
              }}
            />
            <Text style={{ color: "grey" }}>
              Enter your Litecoin Address that will be used to withdraw your
              funds
            </Text>
          </View>
          <View style={{ gap: 20, marginTop: 10 }}>
            <Text style={{ fontSize: 15, color: "black", fontWeight: 500 }}>
              USDT.TRC20
            </Text>
            <TextInput
              placeholder="Enter USDT.TRC20 Address"
              style={{
                height: 50,
                borderColor: "gray",
                borderWidth: 1,
                padding: 10,
                borderRadius: 8,
                fontSize: 18,
              }}
            />
            <Text style={{ color: "grey" }}>
              Enter your USDT.TRC20 Address that will be used to withdraw your
              funds
            </Text>
          </View>
          <DButton
            title="Submit"
            onPress={() => {}}
            style={{ marginBottom: 100 }}
          >
            Update
          </DButton>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default WithdrawalSetting;
