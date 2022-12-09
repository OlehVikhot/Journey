import { StyleSheet, View } from "react-native";
import { TextInter } from "../../components";
import { colors } from "../../constants/colors";

export function InfoComponent({ children, text }) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.iconContainer}>{children}</View>
      <View style={styles.textContainer}>
        <TextInter style={styles.text}>{text}</TextInter>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    marginBottom: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    width: 42,
    height: 42,
    backgroundColor: colors.purple1,
    borderRadius: 200,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  text: {
    fontFamily: "Inter_400Regular",
  },
});
