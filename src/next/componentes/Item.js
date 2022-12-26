import { StyleSheet, Text, View } from "react-native";

export default function Item({ data, temp_maxima, temp_minima }) {
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

  temp_maxima = Math.trunc(temp_maxima * 100) / 100;
  temp_minima = Math.trunc(temp_minima * 100) / 100;

  return (
    <View style={styles.linha1}>
      <View style={styles.linha2}>
        <Text>
          <Text style={styles.texto1}>{dias_semana[data.getDay()]},</Text>
          <Text style={styles.texto2}>
            {" "}
            {data.getDate()} de {meses[data.getMonth()]}
          </Text>
        </Text>
      </View>
      <Text>
        <Text style={styles.numero1}>{temp_maxima + "°"}</Text>
        <Text style={styles.numero2}> / {temp_minima + "°"}</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  linha1: {
    width: "90vw",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  linha2: {
    flexDirection: "row",
    alignItems: "center",
  },
  texto1: {
    fontFamily: "Poppins-Regular",
    fontSize: 18,
    color: "#FFFFFF",
  },
  texto2: {
    fontFamily: "Poppins-Regular",
    fontSize: 18,
    color: "#D0D0D0",
  },
  numero1: {
    fontFamily: "Poppins-Regular",
    fontSize: 25,
    color: "#FFFFFF",
  },
  numero2: {
    fontFamily: "Poppins-Regular",
    fontSize: 20,
    color: "#D0D0D0",
  },
  imagem: {
    width: 40,
    height: 40,
    marginRight: "11.4vw",
  },
});
