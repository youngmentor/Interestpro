import { Text, View, StyleSheet, Image } from "react-native";
import SideBarNav from "./sidebarNav";
function SideBar() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View
        style={[
          styles.container,
          Platform.OS === "android"
            ? { top: 46, left: -20 }
            : { top: 139, left: -20 },
        ]}
      >
        <View
          style={{ justifyContent: "center", alignItems: "center", gap: 20 }}
        >
          <Image
            source={require("../../../../assets/user.png")}
            style={{ width: 85, height: 85, borderRadius: 50 }}
          />
          <View style={{ gap: 10 }}>
            <Text style={{ color: "white", fontSize: 18 }}>Love</Text>
            <Text style={{ color: "white", fontSize: 15 }}>online</Text>
          </View>
          <View style={[styles.priceTag]}>
            <Text style={{ fontSize: 18 }}>$ 800</Text>
          </View>
        </View>
      </View>
      <View
        style={[
          styles.container2,
          Platform.OS === "android"
            ? { top: 346, left: -20 }
            : { top: 439, left: -20 },
        ]}
      >
        <SideBarNav />
      </View>
    </View>
  );
}

export default SideBar;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    backgroundColor: "#181834",
    width: 395,
    height: 300,
    padding: 20,
    gap: 15,
    borderBottomLeftRadius: 50,
    elevation: 4,
    color: "white",
  },
  container2: {
    position: "absolute",
    width: 395,
    height: 300,
    padding: 20,
    gap: 15,
    elevation: 4,
    color: "white",
    justifyContent: "center",
    flexDirection: "row",
  },
  priceTag: {
    width: 100,
    height: 50,
    borderRadius: 30,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});
