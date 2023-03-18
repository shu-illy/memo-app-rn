import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { CircleButton } from "../components/CircleButton";
import { RootStackParamList } from "../../App";

type Props = NativeStackScreenProps<RootStackParamList, "MemoDetail">;

export const MemoDetailScreen: React.FC<Props> = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle}>買い物リスト</Text>
        <Text style={styles.memoDate}>2020年12月24日 10:00</Text>
      </View>
      <ScrollView style={styles.memoBody}>
        <Text style={styles.memoText}>
          {`買い物リスト\n書体やレイアウトなどを確認するために用います。\n本文用なので使い方を間違えると不自然に見えることもありますので要注意。`}
        </Text>
      </ScrollView>
      <CircleButton
        iconName="edit-2"
        onPress={() => {
          navigation.navigate("MemoEdit");
        }}
        style={{ top: 60, bottom: "auto" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  memoHeader: {
    backgroundColor: "#467FD3",
    height: 96,
    justifyContent: "center",
    paddingVertical: 24,
    paddingHorizontal: 19,
  },
  memoTitle: {
    color: "#ffffff",
    fontSize: 20,
    lineHeight: 32,
    fontWeight: "bold",
  },
  memoDate: {
    color: "#ffffff",
    fontSize: 12,
    lineHeight: 16,
  },
  memoBody: {
    paddingVertical: 32,
    paddingHorizontal: 27,
  },
  memoText: {
    fontSize: 16,
    lineHeight: 24,
  },
});
