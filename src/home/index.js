import { StyleSheet, View } from "react-native";
import Botões from "./componentes/Botões";
import Linha from "./componentes/Linha";
import Localização from "./componentes/Localização";
import Quadrado from "./componentes/Quadrado";
import Data from "./componentes/Data";
import Rodapé from "./componentes/Rodapé";
import { useEffect, useState } from "react";

export default function Home({ navigation }) {
  const [dados, setDados] = useState();

  useEffect(() => {
    const params = new URLSearchParams({
      lat: "-9.665220",
      lon: "-35.735710",
      appid: "992e27058b7770c8fcf3e3c5052ff974",
      units: "metric",
      lang: "pt_br",
    });
    console.log(
      "https://api.openweathermap.org/data/2.5/weather?" + params.toString()
    );
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?" + params.toString()
    )
      .then((response) => response.json())
      .then((value) => {
        setDados(value);
      });
  }, []);

  if (!dados) return null;

  console.log(dados);

  return (
    <View style={styles.container}>
      <Botões />
      <Localização cidade="maceio" pais="brasil" />
      <Quadrado descrição="Chuva" data="12/12/12" temperatura={12} />
      <Linha vento={12} sensação={12} uv={12} pressão={12} />
      <Data onPress={() => navigation.navigate("Next")} />
      <Rodapé proximas={[12, 12, 12, 12, 12, 12]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "#FFF",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
  },
});
