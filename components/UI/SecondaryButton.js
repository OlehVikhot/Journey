import { Pressable, StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../../constants/colors";

export function SecondaryButton({ onPress, text, icon, inactive }) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        onPress={onPress}
        style={
          inactive
            ? [styles.button, styles.buttonInactive]
            : ({ pressed }) => [styles.button, pressed && styles.buttonPressed]
        }
      >
        {({ pressed }) => (
          <View style={styles.insideConatianer}>
            <AntDesign
              style={pressed ? styles.iconPressed : styles.icon}
              name={icon}
              size={22}
            />
            <Text style={pressed ? styles.textPressed : styles.text}>
              {text}
            </Text>
          </View>
        )}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
  },
  button: {
    width: "100%",
    height: 54,
    borderWidth: 2,
    borderColor: colors.primaryOrange,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 200,
  },
  insideConatianer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonPressed: {
    borderColor: colors.pressedOrange,
  },
  buttonInactive: {
    borderColor: colors.disabledOrange,
  },
  text: {
    color: colors.primaryOrange,
    fontSize: 14,
  },
  textPressed: {
    color: colors.pressedOrange,
    fontSize: 14,
  },
  icon: {
    marginRight: 13.5,
    color: colors.primaryOrange,
  },
  iconPressed: {
    marginRight: 13.5,
    color: colors.pressedOrange,
  },
});
