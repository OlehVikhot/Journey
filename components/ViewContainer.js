import { StyleSheet, View } from "react-native";

export default function ViewContainer({ children, style }) {
  return <View style={[styles.view, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  view: {
    paddingHorizontal: 23,
    marginTop: 23,
  },
});
