import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import Botões from "./componentes/Botões";
import Cabeçalho from "./componentes/Cabeçalho";
import Lista from "./componentes/Lista";

export default function Next({ navigation }) {
  const [dados, setDados] = useState();

  useEffect(() => {
    const params = new URLSearchParams({
      appid: "a0eb581c22111e8aa09190b94cd2f375",
      lat: "-9.665220",
      lon: "-35.735710",
      units: "metric",
      lang: "pt_br",
    });
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
      <Botões
        onPress={() => navigation.navigate("Home")}
        cidade="maceio"
        pais="brasil"
      />
      <Cabeçalho />
      <Lista
        proximos={[
          {
            dia_semana: "Segunda",
            dia_mês: 12,
            temp_maxima: 12,
            temp_minima: 12,
          },
          {
            dia_semana: "Terça",
            dia_mês: 12,
            temp_maxima: 12,
            temp_minima: 12,
          },
          {
            dia_semana: "Quarta",
            dia_mês: 12,
            temp_maxima: 12,
            temp_minima: 12,
          },
          {
            dia_semana: "Quinta",
            dia_mês: 12,
            temp_maxima: 12,
            temp_minima: 12,
          },
          {
            dia_semana: "Sexta",
            dia_mês: 12,
            temp_maxima: 12,
            temp_minima: 12,
          },
          {
            dia_semana: "Sabado",
            dia_mês: 12,
            temp_maxima: 12,
            temp_minima: 12,
          },
          {
            dia_semana: "Domingo",
            dia_mês: 12,
            temp_maxima: 12,
            temp_minima: 12,
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100vw",
    height: "100vh",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#427BFF",
    alignItems: "center",
    alignSelf: "center",
  },
});
