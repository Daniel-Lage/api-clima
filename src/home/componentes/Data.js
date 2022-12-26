import { Pressable, StyleSheet, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";

export default function Data({ onPress }) {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.texto}>Hoje</Text>
      </View>
      <Pressable
        onPress={onPress}
        style={{ flexDirection: "row", alignItems: "center" }}
      >
        <Text style={styles.texto2}>Próximos 5 Dias</Text>
        <Entypo
          name="chevron-right"
          size={25}
          backgroundColor="#FFFFFF"
          color="#999999"
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90vw",
    marginTop: "4vh",
    marginBottom: "1vh",
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  texto: {
    fontFamily: "Poppins-Regular",
    fontWeight: "bold",
    fontSize: 20,
  },

  texto2: {
    fontFamily: "Poppins-Regular",
    fontWeight: "bold",
    fontSize: 20,
    color: "#999999",
  },

  botão: {
    width: 14,
    height: 14,
  },
});
