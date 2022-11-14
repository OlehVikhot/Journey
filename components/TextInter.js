import { Text } from "react-native";

export default function TextInter({ children, style }) {
  return (
    <Text style={[{ fontFamily: "Inter_600SemiBold" }, style]}>{children}</Text>
  );
}
