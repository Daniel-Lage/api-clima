import { StyleSheet, View } from "react-native";
import Botões from "./componentes/Botões";
import Linha from "./componentes/Linha";
import Localização from "./componentes/Localização";
import Quadrado from "./componentes/Quadrado";
import Data from "./componentes/Data";
import Rodapé from "./componentes/Rodapé";

export default function Home({ navigation, route }) {
  const data_hoje = new Date(route.params.list[0].dt_txt);
  const proximas = route.params.list.filter((value) => {
    const data = new Date(value.dt_txt);
    return data.getDate() === data_hoje.getDate();
  });

  return (
    <View style={styles.container}>
      <Botões />
      <Localização
        cidade={route.params.city.name}
        pais={route.params.city.country}
      />
      <Quadrado
        descrição={route.params.list[0].weather[0].description}
        data={`${data_hoje.getDate()}/${
          data_hoje.getMonth() + 1
        }/${data_hoje.getFullYear()}`}
        temperatura={route.params.list[0].main.temp}
      />
      <Linha
        vento={route.params.list[0].wind.speed}
        sensação={route.params.list[0].main.feels_like}
        umidade={route.params.list[0].main.humidity}
        pressão={route.params.list[0].main.pressure}
      />
      <Data onPress={() => navigation.navigate("Next")} />
      <Rodapé proximas={proximas} />
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
