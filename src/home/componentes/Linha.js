import { StyleSheet, Text, View } from "react-native";
import Subquadrado from "./Subquadrado";
import Sol from "../../../assets/sol-branco.png";
import Vento from "../../../assets/vento.png";
import Termometro from "../../../assets/termometro.png";
import Pressão from "../../../assets/pressão.png";

export default function Linha({ vento, sensação, uv, pressão }) {
  return (
    <View style={styles.container}>
      <Subquadrado
        style={styles.quadrado1}
        imagem={Vento}
        categoria="Vento"
        conteudo={vento + "km/h"}
      />
      <Subquadrado
        style={styles.quadrado2}
        imagem={Termometro}
        categoria="Sensação"
        conteudo={sensação + "°"}
      />
      <Subquadrado
        style={styles.quadrado3}
        imagem={Sol}
        categoria="Indice UV"
        conteudo={uv}
      />
      <Subquadrado
        style={styles.quadrado4}
        imagem={Pressão}
        categoria="Pressão"
        conteudo={pressão + " mbar"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "grid",
    gridTemplateColumns: "auto auto",
    width: "90vw",
    height: "14vh",
  },
  quadrado1: {
    width: "100%",
    height: "100%",
    backgroundColor: "#427BFF",
    border: "1px solid white",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderLeftWidth: 0,
  },
  quadrado2: {
    width: "100%",
    height: "100%",
    backgroundColor: "#427BFF",
    border: "1px solid white",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
  quadrado3: {
    width: "100%",
    height: "100%",
    backgroundColor: "#427BFF",
    border: "1px solid white",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    borderBottomLeftRadius: 20,
  },
  quadrado4: {
    width: "100%",
    height: "100%",
    backgroundColor: "#427BFF",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderBottomRightRadius: 20,
  },
});
