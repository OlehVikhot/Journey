import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../../constants/colors";

export function TextButton({ onPress, text }) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
        onPress={onPress}
      >
        {({ pressed }) => (
          <Text style={pressed ? styles.textPressed : styles.text}>{text}</Text>
        )}
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  text: {
    color: colors.primaryOrange,
    fontSize: 14,
    fontFamily: "Inter_600SemiBold",
    textDecorationLine: "underline",
  },
  textPressed: {
    color: colors.pressedOrange,
    fontSize: 14,
    fontFamily: "Inter_600SemiBold",
    textDecorationLine: "underline",
  },
  icon: {
    marginRight: 14,
  },
});
