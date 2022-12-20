import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";

import Fonte from "./assets/Poppins-Regular.ttf";
import Home from "./src/home";
import Next from "./src/next";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": Fonte,
  });
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Home Screen" }}
        />
        <Stack.Screen
          name="Next"
          component={Next}
          options={{ title: "Next 7 Days" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
