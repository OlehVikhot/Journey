import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Colors } from "../../../constants/colors";
import ProfileMainScreen from "./ProfileMainScreen";

const Stack = createNativeStackNavigator();
export default function ProfileScreens() {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: {
          backgroundColor: Colors.white,
        },
      }}
    >
      <Stack.Screen
        name="MainProfile"
        component={ProfileMainScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
