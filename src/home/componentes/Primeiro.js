import { Image, StyleSheet, Text, View } from "react-native";

export default function Primeiro({ horário, imagem, temperatura }) {
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
    backgroundColor: "#427BFF",
    border: "1px solid #FFFFFF",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginLeft: "5vw",
    marginRight: "3vw",
    marginTop: "1vh",
  },
  texto: {
    fontFamily: "Poppins-Regular",
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  imagem: {
    height: 40,
    width: 40,
  },
});
