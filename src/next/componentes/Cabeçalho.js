import { StyleSheet, Text, View } from "react-native";

export default function Cabeçalho() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Próximos 7 Dias</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90vw",
    marginTop: 70,
    marginBottom: 40,
  },
  titulo: {
    fontFamily: "Poppins-Regular",
    fontSize: 25,
    color: "#FFFFFF",
  },
});
