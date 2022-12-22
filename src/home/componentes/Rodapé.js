import { StyleSheet, ScrollView, View } from "react-native";
import Primeiro from "./Primeiro";
import Intermediário from "./Intermediário";
import Último from "./Último";

export default function Rodapé({ proximas }) {
  console.log(proximas);
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        {proximas.map((value, index) => {
          const data = new Date(value.dt_txt);
          console.log();
          if (index === 0)
            return <Primeiro key={index} horário={data.getHours()} />;
          else if (index !== proximas.length - 1)
            return (
              <Intermediário
                key={index}
                horário={data.getHours()}
                temperatura={proximas[0].main.temp}
              />
            );
          else
            return (
              <Último
                key={index}
                horário={data.getHours()}
                temperatura={proximas[5].main.temp}
              />
            );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100vw",
    height: "18vh",
  },
});
