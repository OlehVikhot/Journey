import { Text } from "react-native";

export function TextInter({ children, style }) {
  return (
    <Text style={[{ fontFamily: "Inter_600SemiBold" }, style]}>{children}</Text>
  );
}
