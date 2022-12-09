import { Provider } from "react-redux";
import { StatusBar, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import store from "./store/store";
import WelcomeScreens from "./screens/WelcomeScreens";
import TabsScreens from "./screens/TabScreens";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return <View style={{ backgroundColor: "red" }} />;
  }

  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen
            name="Welcome"
            component={WelcomeScreens}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Tabs"
            component={TabsScreens}
            options={{
              gestureEnabled: false,
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
