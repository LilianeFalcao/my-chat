import React from "react";
import { Text, View } from "react-native";
import { cardProps } from "../../interfaces/card.interfaces";
import styles from "./styles";

export default function card({ data }: cardProps) {
  return (
    <View style={styles.card}>
      <Text>
        <>{data.nome} - {data.data}</>
      </Text>
      <View>
        <Text>Título: {data.titulo}</Text>
        <Text>Mensagem: {data.mensagem}</Text>
        <View style={styles.topicos}>
          {data.topico.map((i) => (
            <View key={i.id} style={styles.topic}>
              <Text>{i.item}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}