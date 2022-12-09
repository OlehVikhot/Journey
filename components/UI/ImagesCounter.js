import { StyleSheet, View } from "react-native";
import { TextInter } from "../Layout/TextInter";
import { colors } from "../../constants/colors";

export function ImagesCounter() {
  return (
    <View style={styles.counter}>
      <TextInter style={styles.counterText}>1/200</TextInter>
    </View>
  );
}

const styles = StyleSheet.create({
  counter: {
    width: 52,
    height: 24,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: colors.white,
  },
  counterText: {
    fontFamily: "Inter_400Regular",
    fontSize: 14,
  },
});
