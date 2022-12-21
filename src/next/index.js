import { StyleSheet, View } from "react-native";
import Botões from "./componentes/Botões";
import Cabeçalho from "./componentes/Cabeçalho";
import Lista from "./componentes/Lista";

export default function Next({ navigation, route }) {
  const data_hoje = new Date(route.params.list[0].dt_txt);
  const proximas = route.params.list.filter((value) => {
    const data = new Date(value.dt_txt);
    return data.getDate() !== data_hoje.getDate() && data.getHours() === 0;
  });

  return (
    <View style={styles.container}>
      <Botões
        onPress={() => navigation.navigate("Home")}
        cidade={route.params.city.name}
        pais={route.params.city.country}
      />
      <Cabeçalho />
      <Lista proximas={proximas} />
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
