import { NativeStackScreenProps } from "@react-navigation/native-stack/lib/typescript/src/types";
import React from "react";
import { KeyboardAvoidingView, StyleSheet, TextInput, View } from "react-native";
import { CircleButton } from "../components/CircleButton";
import { RootStackParamList } from "../../App";

type Props = NativeStackScreenProps<RootStackParamList, "MemoEdit">;

export const MemoEditScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <View style={styles.inputContainer}>
        <TextInput value="買い物リスト" multiline style={styles.input} />
      </View>
      <CircleButton
        iconName="check"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    paddingHorizontal: 27,
    paddingVertical: 32,
    flex: 1,
  },
  input: {
    flex: 1,
    textAlignVertical: "top",
    fontSize: 16,
    lineHeight: 24,
  },
});
