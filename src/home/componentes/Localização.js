import { StyleSheet, Text, View } from "react-native";

export default function Localização({ cidade, pais }) {
  return (
    <View style={styles.container}>
      <Text>
        <Text style={styles.titulo}>{cidade}, </Text>
        <Text style={styles.subtitulo}>{pais}</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "flex-start",
    marginLeft: "5vw",
    marginTop: "5vh",
    marginBottom: "4vh",
  },
  titulo: {
    fontFamily: "Poppins-Regular",
    fontSize: 28,
    fontWeight: "bold",
  },
  subtitulo: {
    fontFamily: "Poppins-Regular",
    fontWeight: "normal",
    fontSize: 28,
    color: "#888888",
  },
});
