import { Pressable, StyleSheet } from "react-native";
import { Colors } from "../constants/colors";
import TextInter from "./TextInter";

export default function SeeAllButton({ onPress }) {
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
    backgroundColor: Colors.primaryOrange,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  text: {
    fontSize: 12,
    color: Colors.white,
  },
});
