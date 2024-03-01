import { Pressable, StyleSheet, Text, View } from "react-native";

function DButton({ children, onPress }) {
  return (
    <View
      style={[
        styles.buttonHolder,
        Platform.OS === "android" ? { width: 320 } : { width: 350 },
      ]}
    >
      <Pressable onPress={onPress} style={styles.button}>
        <Text style={styles.logintext}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default DButton;
const styles = StyleSheet.create({
  buttonHolder: {
    width: 350,
    backgroundColor: "#FFCD79",
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    color: "white",
    borderRadius: 8,
    marginBottom: 40,
  },
  button: {
    width: "100%",
    // backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
  },
  logintext: {
    color: "white",
    fontSize: 20,
    color: "black",
  },
});
