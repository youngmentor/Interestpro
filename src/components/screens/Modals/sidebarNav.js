import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Icon } from "react-native-elements";
import Entypo from "react-native-vector-icons/Entypo";
import Fontisto from "react-native-vector-icons/Fontisto";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import { useNavigation } from "@react-navigation/native";
function SideBarNav() {
  //   const navigation = useNavigation();

  //   const navigateToHome = () => {
  //     navigation.navigate("AdminHome");
  //   };
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
        <TouchableOpacity>
          <View style={styles.cardContainer}>
            <Icon name="home" color="white" size={30} />
            <Text style={{ color: "white", fontSize: 15 }}>Home</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.cardContainer}>
          <Fontisto name="download" color="white" size={30} />
          <Text style={{ color: "white", fontSize: 15 }}>Deposit</Text>
        </View>
      </View>

      <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
        <View style={styles.cardContainer}>
          <Entypo name="arrow-with-circle-up" color="white" size={30} />
          <Text style={{ color: "white", fontSize: 15 }}>Withdrawal</Text>
        </View>
        <View style={styles.cardContainer}>
          <FontAwesome name="history" color="white" size={30} />
          <Text style={{ color: "white", fontSize: 15 }}>Profit History</Text>
        </View>
      </View>

      <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
        <View style={styles.cardContainer}>
          <FontAwesome name="credit-card" color="white" size={30} />
          <Text style={{ color: "white", fontSize: 15 }}>Transaction</Text>
        </View>
        <View style={styles.cardContainer}>
          <Fontisto name="arrow-swap" color="white" size={30} />
          <Text style={{ color: "white", fontSize: 15 }}>
            Transaction refund
          </Text>
        </View>
      </View>

      <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
        <View style={styles.cardContainer}>
          <FontAwesome name="id-card-o" color="white" size={30} />
          <Text style={{ color: "white", fontSize: 15 }}>Profile</Text>
        </View>
        <View style={styles.cardContainer}>
          <FontAwesome5 name="hand-holding-usd" color="white" size={30} />
          <Text style={{ color: "white", fontSize: 15 }}>Trading Plan</Text>
        </View>
      </View>

      <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
        <View style={styles.cardContainer}>
          <FontAwesome5 name="hand-holding-heart" color="white" size={30} />
          <Text style={{ color: "white", fontSize: 15 }}>My Plan</Text>
        </View>
        <View style={styles.cardContainer}>
          <SimpleLineIcons name="refresh" color="white" size={30} />
          <Text style={{ color: "white", fontSize: 15 }}>Referral</Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
        <View style={styles.cardContainer}>
          <FontAwesome5 name="hand-holding-heart" color="white" size={30} />
          <Text style={{ color: "white", fontSize: 15 }}>Admin</Text>
        </View>
      </View>
    </ScrollView>
  );
}

export default SideBarNav;

const styles = StyleSheet.create({
  scrollContainer: {
    gap: 20,
    alignItems: "center",
  },
  cardContainer: {
    width: 150,
    height: 150,
    backgroundColor: "#181834",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
});
