import React from "react";
import { View } from "react-native";
import { cardSocialProps } from "../../interfaces/card.interfaces";
import styles from "./styles";

export default function CardSocial({ children }: cardSocialProps) {
  return <View style={styles.cardSocial}>{children}</View>;
}
