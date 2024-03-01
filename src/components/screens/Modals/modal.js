import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

function DropDown() {
  return (
    <View
      style={[
        styles.container,
        Platform.OS === "android"
          ? { top: 55, left: 30 }
          : { top: 150, left: 60 },
      ]}
    >
      <Text style={{ fontSize: 18 }}>Suliton</Text>
      <View style={styles.underlinedView}></View>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
        <TouchableOpacity>
          <Icon name="person" size={25} color="black" />
        </TouchableOpacity>
        <Text style={{ fontSize: 18 }}>My Profile</Text>
      </View>
      <View style={styles.underlinedView}></View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 20,
        }}
      >
        <TouchableOpacity>
          <Icon name="logout" size={25} color="red" />
        </TouchableOpacity>
        <Text style={{ fontSize: 18, color: "red" }}>Log out</Text>
      </View>
    </View>
  );
}

export default DropDown;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    backgroundColor: "white",
    width: 300,
    padding: 20,
    gap: 15,
    borderRadius: 10,
    elevation: 4,
  },
  underlinedView: {
    borderBottomWidth: 1,
    borderBottomColor: "grey",
  },
});
