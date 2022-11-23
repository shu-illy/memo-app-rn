import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import { AppBar } from "../components/AppBar";
import { CircleButton } from "../components/CircleButton";
import { MemoList } from "../components/MemoList";

export const MemoListScreen: FC = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <MemoList />
      <CircleButton iconName="plus" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F4F8",
  },
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
});
