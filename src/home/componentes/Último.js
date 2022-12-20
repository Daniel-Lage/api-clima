import { Image, StyleSheet, Text, View } from "react-native";

export default function Último({ horário, imagem, temperatura }) {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>{horário}</Text>
      <Image source={imagem} style={styles.imagem} />
      <Text style={styles.texto}>{temperatura + "°"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "15vw",
    height: "90%",
    borderRadius: 15,
    backgroundColor: "#FFFFFF",
    border: "1px solid #999999",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginRight: "5vw",
    marginTop: "1vh",
  },
  texto: {
    fontFamily: "Poppins-Regular",
    color: "#707070",
    fontSize: 20,
    fontWeight: "bold",
  },
  imagem: {
    height: 40,
    width: 40,
  },
});
