import { StyleSheet, Text, View } from "react-native";
import Nuvem from "../../../assets/nuvem-branca.png";
import NuvemChuva from "../../../assets/nuvem-chuva-branca.png";
import NuvemSol from "../../../assets/nuvem-sol.png";
import Sol from "../../../assets/sol.png";
import Item from "./Item";

export default function Lista({ proximas }) {
  return (
    <View style={styles.container}>
      {proximas.map((value, index) => {
        const data = new Date(value.dt_txt);

        return (
          <Item
            key={index}
            dia_semana={data.getDay()}
            dia_mês={data.getDate()}
            temp_maxima={value.main.temp_max}
            temp_minima={value.main.temp_min}
          />
        );
      })}
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
