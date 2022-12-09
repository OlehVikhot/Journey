import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileMainScreen from "./ProfileMainScreen";
import { colors } from "../../../constants/colors";

const Stack = createNativeStackNavigator();
export default function ProfileScreens() {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: {
          backgroundColor: colors.white,
        },
      }}
    >
      <Stack.Screen
        name='MainProfile'
        component={ProfileMainScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
