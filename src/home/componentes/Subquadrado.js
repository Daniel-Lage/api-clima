import { Image, StyleSheet, Text, View } from "react-native";

export default function Subquadrado({ style, imagem, categoria, conteudo }) {
  return (
    <View style={style}>
      <Image source={imagem} style={styles.imagem} />
      <View style={styles.texto}>
        <Text style={styles.categoria}>{categoria}</Text>
        <Text style={styles.conteudo}>{conteudo}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imagem: { height: 30, width: 30 },
  texto: {
    flexDirection: "column",
    marginLeft: 10,
    justifyContent: "space-around",
    height: "100%",
  },
  categoria: {
    fontFamily: "Poppins-Regular",
    marginTop: "1vh",
    fontWeight: "bold",
    fontSize: 15,
    color: "#D0D0D0",
  },
  conteudo: {
    fontFamily: "Poppins-Regular",
    marginBottom: "1vh",
    fontWeight: "bold",
    fontSize: 15,
    color: "#FFFFFF",
  },
});
