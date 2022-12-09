import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../../constants/colors";

export function SmallButton({ onPress, text, inactive }) {
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
    backgroundColor: colors.primaryOrange,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  buttonPressed: {
    backgroundColor: colors.pressedOrange,
  },
  buttonInactive: {
    backgroundColor: colors.disabledOrange,
  },
  text: {
    color: colors.white,
    fontSize: 12,
  },
  icon: {
    marginRight: 14,
  },
});
