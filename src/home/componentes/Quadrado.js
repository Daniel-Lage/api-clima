import { Image, StyleSheet, Text, View } from "react-native";
import NuvemSol from "../../../assets/nuvem-sol.png";

export default function Quadrado({ descrição, data, temperatura }) {
  return (
    <View style={styles.quadrado}>
      <Image source={NuvemSol} style={styles.imagem} />
      <Text style={styles.tempo}>{descrição}</Text>
      <Text style={styles.data}>{data}</Text>
      <Text style={styles.temperatura}>{temperatura}°</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  quadrado: {
    width: "90vw",
    height: "36vh",
    backgroundColor: "#427BFF",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
  tempo: {
    fontFamily: "Poppins-Regular",
    fontSize: 35,
    color: "#FFFFFF",
  },
  data: {
    fontFamily: "Poppins-Regular",
    fontSize: 20,
    color: "#D0D0D0",
  },
  temperatura: {
    fontFamily: "Poppins-Regular",
    fontWeight: "bold",
    fontSize: 70,
    color: "#FFFFFF",
  },
  imagem: {
    width: 80,
    height: 80,
    marginTop: "2vh",
    marginBottom: "1vh",
  },
});