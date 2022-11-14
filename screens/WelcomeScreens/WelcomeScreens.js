import { createNativeStackNavigator } from "@react-navigation/native-stack";

import StartingScreen from "./StartingScreen";
import LogInScreens from "./LogInScreens/LogInScreens";

import { Colors } from "../../constants/colors";

const Stack = createNativeStackNavigator();

export default function WelcomeScreens() {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: {
          backgroundColor: Colors.white,
        },
      }}
    >
      <Stack.Screen
        name="StartingScreen"
        component={StartingScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="LogInScreens"
        component={LogInScreens}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
