import { Pressable, StyleSheet } from "react-native";
import { TextInter } from "../Layout/TextInter";
import { colors } from "../../constants/colors";

export function SeeAllButton({ onPress }) {
  return (
    <Pressable style={styles.mainContainer} onPress={onPress}>
      <TextInter style={styles.text}>See All</TextInter>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    width: 59,
    height: 22,
    backgroundColor: colors.primaryOrange,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  text: {
    fontSize: 12,
    color: colors.white,
  },
});
