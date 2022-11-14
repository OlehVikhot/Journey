import { Pressable, StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Colors } from "../constants/colors";

export default function PrimaryButton({ onPress, text, icon, inactive }) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        onPress={onPress}
        style={
          inactive === true
            ? [styles.button, styles.buttonInactive]
            : ({ pressed }) => [styles.button, pressed && styles.buttonPressed]
        }
      >
        {icon && (
          <AntDesign style={styles.icon} name={icon} size={22} color="white" />
        )}
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
    width: "100%",
    height: 54,
    backgroundColor: Colors.primaryOrange,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 200,
  },
  buttonPressed: {
    backgroundColor: Colors.pressedOrange,
  },
  buttonInactive: {
    backgroundColor: Colors.disabledOrange,
  },
  text: {
    color: Colors.white,
    fontSize: 14,
  },
  icon: {
    marginRight: 14,
  },
});
