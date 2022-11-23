import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  children: string;
  style?: any;
};

export const CircleButton: FC<Props> = ({ children, style }) => {
  return (
    <View style={[styles.circleButton, style]}>
      <Text style={styles.circleButtonLabel}>{children}</Text>
    </View>
  );
};

CircleButton.defaultProps = {
  style: null,
};

const styles = StyleSheet.create({
  circleButton: {
    backgroundColor: "#467FD3",
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 40,
    bottom: 40,
    shadowColor: "#000000", // iOSにしか適用できないプロパティ
    shadowOffset: { width: 0, height: 8 }, // iOSにしか適用できないプロパティ
    shadowOpacity: 0.25, // iOSにしか適用できないプロパティ
    shadowRadius: 8, // iOSにしか適用できないプロパティ
    elevation: 8, // Androidにしか適用できないプロパティ
  },
  circleButtonLabel: {
    color: "#ffffff",
    fontSize: 40,
    lineHeight: 40,
  },
});
