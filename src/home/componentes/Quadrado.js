import { StyleSheet, Text, View } from "react-native";

export default function Quadrado({ descrição, data, temperatura }) {
  descrição = descrição
    .split(" ")
    .map((value) => value.charAt(0).toUpperCase() + value.slice(1))
    .join(" ");

  const dias_semana = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  return (
    <View style={styles.quadrado}>
      <Text style={styles.tempo}>{descrição}</Text>
      <Text style={styles.data}>
        {dias_semana[data.getDay()]}, {data.getDate()} de{" "}
        {meses[data.getMonth()]}
      </Text>
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
    marginTop: "1vh",
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
