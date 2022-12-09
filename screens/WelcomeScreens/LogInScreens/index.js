import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LogInConfirmEmailScreen from "./LogInConfirmEmailScreen";
import LogInMainScreen from "./LogInMainScreen";
import { colors } from "../../../constants/colors";

const Stack = createNativeStackNavigator();

export default function LogInScreens() {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: {
          backgroundColor: colors.white,
        },
      }}
    >
      <Stack.Screen
        name='LogInMain'
        component={LogInMainScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='LogInConfirmEmail'
        component={LogInConfirmEmailScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
