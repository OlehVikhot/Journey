import { Text } from "react-native";

export function TextTitle({ children, style }) {
  return (
    <Text style={[{ fontFamily: "Inter_700Bold", fontSize: 22 }, style]}>
      {children}
    </Text>
  );
}
