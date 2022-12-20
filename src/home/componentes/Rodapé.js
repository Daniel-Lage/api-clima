import { StyleSheet, ScrollView, View } from "react-native";
import Nuvem from "../../../assets/nuvem-branca.png";
import NuvemChuva from "../../../assets/nuvem-chuva.png";
import NuvemSol from "../../../assets/nuvem-sol-azul.png";
import Sol from "../../../assets/sol.png";
import Primeiro from "./Primeiro";
import Intermediário from "./Intermediário";
import Último from "./Último";

export default function Rodapé({ proximas }) {
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        <Primeiro horário="12:00" imagem={Nuvem} temperatura="Now" />
        <Intermediário
          horário="14:00"
          imagem={NuvemChuva}
          temperatura={proximas[0]}
        />
        <Intermediário
          horário="16:00"
          imagem={NuvemSol}
          temperatura={proximas[1]}
        />
        <Intermediário
          horário="18:00"
          imagem={NuvemSol}
          temperatura={proximas[2]}
        />
        <Intermediário horário="20:00" imagem={Sol} temperatura={proximas[3]} />
        <Intermediário
          horário="22:00"
          imagem={NuvemSol}
          temperatura={proximas[4]}
        />
        <Último horário="24:00" imagem={Sol} temperatura={proximas[5]} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100vw",
    height: "18vh",
  },
});
