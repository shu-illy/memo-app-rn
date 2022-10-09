import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  children: string;
  bang: boolean;
  style?: any;
};

export const Hello: FC<Props> = ({ children, bang, style }) => {
  return (
    <View>
      <Text style={[styles.text, style]}>{`Hello ${children}${
        bang && "!"
      }`}</Text>
    </View>
  );
};

Hello.defaultProps = {
  style: null,
};

const styles = StyleSheet.create({
  text: {
    color: "#ffffff",
    backgroundColor: "blue",
    fontSize: 40,
    fontWeight: "bold",
    padding: 16,
  },
});
