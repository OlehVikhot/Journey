import { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { Colors } from "../constants/colors";
import TextInter from "./TextInter";

export default function PlaceButton({ onPress, text, activeOn }) {
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
    backgroundColor: Colors.gray5,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 20,
    marginRight: 6,
  },
  mainContainerActive: {
    backgroundColor: Colors.purple1,
  },
  text: {
    color: Colors.purple1,
    fontSize: 14,
  },
  textActive: {
    color: Colors.white,
  },
});
