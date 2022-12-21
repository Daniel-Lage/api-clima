import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { useFonts } from "expo-font";

import Fonte from "./assets/Poppins-Regular.ttf";
import Home from "./src/home";
import Next from "./src/next";

const Stack = createNativeStackNavigator();

export default function App() {
  const [dados, setDados] = useState();

  const [fontsLoaded] = useFonts({
    "Poppins-Regular": Fonte,
  });

  useEffect(() => {
    const params = new URLSearchParams({
      lat: "-9.665220",
      lon: "-35.735710",
      appid: "992e27058b7770c8fcf3e3c5052ff974",
      units: "metric",
      lang: "pt_br",
    });
    fetch(
      "https://api.openweathermap.org/data/2.5/forecast?" + params.toString()
    )
      .then((response) => response.json())
      .then((value) => {
        setDados(value);
      });
  }, []);

  if (!dados) return null;

  console.log(dados);

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
          initialParams={dados}
        />
        <Stack.Screen
          name="Next"
          component={Next}
          options={{ title: "Próximos 5 Dias" }}
          initialParams={dados}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
