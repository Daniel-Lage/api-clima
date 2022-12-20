import { StyleSheet, View } from "react-native";
import { Entypo } from "@expo/vector-icons";

export default function Botões() {
  return (
    <View style={styles.container}>
      <Entypo
        name="menu"
        size={40}
        color="black"
        style={{ marginTop: "2vh" }}
      />
      <Entypo
        name="dots-three-horizontal"
        size={30}
        color="black"
        style={{ marginTop: "2vh" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90vw",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  botão: {
    width: 20,
    marginTop: "2vh",
  },
});
