import { Pressable, StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Colors } from "../constants/colors";

export default function SmallButton({ onPress, text, inactive }) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={
          inactive
            ? [styles.button, styles.buttonInactive]
            : ({ pressed }) => [styles.button, pressed && styles.buttonPressed]
        }
      >
        <Text style={styles.text}>{text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: 59,
    height: 22,
    backgroundColor: Colors.primaryOrange,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  buttonPressed: {
    backgroundColor: Colors.pressedOrange,
  },
  buttonInactive: {
    backgroundColor: Colors.disabledOrange,
  },
  text: {
    color: Colors.white,
    fontSize: 12,
  },
  icon: {
    marginRight: 14,
  },
});
