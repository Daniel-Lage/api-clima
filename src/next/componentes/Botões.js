import { StyleSheet, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";

export default function Botões({ onPress, cidade, pais }) {
  return (
    <View style={styles.container}>
      <Entypo.Button
        name="chevron-left"
        size={30}
        backgroundColor="#427BFF"
        color="#FFFFFF"
        onPress={onPress}
      />
      <Text>
        <Text style={styles.titulo}>{cidade}, </Text>
        <Text style={styles.subtitulo}>{pais}</Text>
      </Text>
      <Text />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90vw",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
  },
  titulo: {
    fontFamily: "Poppins-Regular",
    fontSize: 25,
    color: "#FFFFFF",
  },
  subtitulo: {
    fontFamily: "Poppins-Regular",
    fontSize: 25,
    color: "#D0D0D0",
  },
  botão: {
    width: 20,
    height: 20,
  },
});
