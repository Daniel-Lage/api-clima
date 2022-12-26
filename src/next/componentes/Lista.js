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
        if (value.main.temp_max !== value.main.temp_min)
          return (
            <Item
              key={index}
              data={data}
              temp_maxima={value.main.temp_max}
              temp_minima={value.main.temp_min}
            />
          );
        else
          return (
            <Item
              key={index}
              data={data}
              temp_maxima={value.main.temp + 0.675}
              temp_minima={value.main.temp - 0.675}
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
