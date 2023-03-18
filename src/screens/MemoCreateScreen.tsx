import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { FC } from "react";
import { Keyboard, KeyboardAvoidingView, StyleSheet, TextInput, View } from "react-native";
import { RootStackParamList } from "../../App";
import { CircleButton } from "../components/CircleButton";

type Props = NativeStackScreenProps<RootStackParamList, "MemoCreate">;

export const MemoCreateScreen: FC<Props> = ({ navigation }) => {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <View style={styles.inputContainer}>
        <TextInput value="" multiline style={styles.input} onSubmitEditing={Keyboard.dismiss} />
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
