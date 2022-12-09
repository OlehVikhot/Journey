import { Pressable, StyleSheet } from "react-native";
import { TextInter } from "../Layout/TextInter";
import { colors } from "../../constants/colors";

export function PlaceButton({ onPress, text, activeOn }) {
  return (
    <Pressable
      style={[styles.mainContainer, activeOn && styles.mainContainerActive]}
      onPress={onPress}
    >
      <TextInter style={[styles.text, activeOn && styles.textActive]}>
        {text}
      </TextInter>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    height: 35,
    paddingHorizontal: 16,
    backgroundColor: colors.gray5,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 20,
    marginRight: 6,
  },
  mainContainerActive: {
    backgroundColor: colors.purple1,
  },
  text: {
    color: colors.purple1,
    fontSize: 14,
  },
  textActive: {
    color: colors.white,
  },
});
