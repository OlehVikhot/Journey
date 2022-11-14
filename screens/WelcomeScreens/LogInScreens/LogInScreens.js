import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Colors } from "../../../constants/colors";

import LogInConfirmEmailScreen from "./LogInConfirmEmailScreen";
import LogInMainScreen from "./LogInMainScreen";

const Stack = createNativeStackNavigator();

export default function LogInScreens() {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: {
          backgroundColor: Colors.white,
        },
      }}
    >
      <Stack.Screen
        name="LogInMain"
        component={LogInMainScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="LogInConfirmEmail"
        component={LogInConfirmEmailScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
