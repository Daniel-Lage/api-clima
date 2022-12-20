import { StyleSheet, Text, View } from "react-native";
import Nuvem from "../../../assets/nuvem-branca.png";
import NuvemChuva from "../../../assets/nuvem-chuva-branca.png";
import NuvemSol from "../../../assets/nuvem-sol.png";
import Sol from "../../../assets/sol.png";
import Item from "./Item";

export default function Lista({ proximos }) {
  return (
    <View style={styles.container}>
      {proximos.map(({ dia_semana, dia_mês, temp_maxima, temp_minima }) => (
        <Item
          key={dia_semana}
          imagem={Sol}
          dia_semana={dia_semana}
          dia_mês={dia_mês}
          temp_maxima={temp_maxima}
          temp_minima={temp_minima}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90vw",
    height: "55vh",
    justifyContent: "space-between",
  },
});
