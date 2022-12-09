import { useState } from "react";
import { Pressable, StyleSheet, View, Linking } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { TextInter } from "../Layout/TextInter";
import { shadow } from "../../constants/shadow";

export function StackView({ title, description, link }) {
  const [opened, setOpened] = useState(false);

  function openStackHandler() {
    setOpened(!opened);
  }

  function openLink() {
    Linking.openURL(link);
  }

  let arrow;
  if (link) {
    arrow = "keyboard-arrow-right";
  }
  if (!link && !opened) {
    arrow = "keyboard-arrow-down";
  }
  if (!link && opened) {
    arrow = "keyboard-arrow-up";
  }

  return (
    <View style={[styles.stackContainer, shadow]}>
      <Pressable
        style={styles.stackInsideContainer}
        onPress={link ? openLink : openStackHandler}
      >
        <TextInter style={styles.titleText}>{title}</TextInter>
        <MaterialIcons name={arrow} size={24} color="black" />
      </Pressable>
      {opened && description && (
        <View>
          {description.map((item, index) => {
            return (
              <View key={index} style={styles.infoContainer}>
                <TextInter>• </TextInter>
                <TextInter style={styles.infoText}>{item}</TextInter>
              </View>
            );
          })}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  stackContainer: {
    paddingHorizontal: 24,
    paddingRight: 28,
    paddingVertical: 22,
    borderRadius: 20,
  },
  stackInsideContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  infoContainer: {
    paddingTop: 24,
    flexDirection: "row",
  },
  titleText: {
    fontSize: 16,
    fontFamily: "Inter_700Bold",
  },
  infoText: {
    fontSize: 14,
    fontFamily: "Inter_400Regular",
  },
});
