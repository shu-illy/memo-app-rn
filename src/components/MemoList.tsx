import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import { RootStackParamList } from "../../App";

export const MemoList = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, "MemoList">>();
  return (
    <>
      <View>
        <TouchableOpacity
          style={styles.memoListItem}
          onPress={() => {
            navigation.navigate("MemoDetail");
          }}
        >
          <View>
            <Text style={styles.memoListItemTitle}>買い物リスト</Text>
            <Text style={styles.memoListItemDate}>2020年12月24日 10:00</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              Alert.alert("Are you sure?");
            }}
            style={styles.memoDelete}
          >
            <Feather name="x" size={16} color="#B0B0B0" />
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={styles.memoListItem}
          onPress={() => {
            navigation.navigate("MemoDetail");
          }}
        >
          <View>
            <Text style={styles.memoListItemTitle}>買い物リスト</Text>
            <Text style={styles.memoListItemDate}>2020年12月24日 10:00</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              Alert.alert("Are you sure?");
            }}
            style={styles.memoDelete}
          >
            <Feather name="x" size={16} color="#B0B0B0" />
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={styles.memoListItem}
          onPress={() => {
            navigation.navigate("MemoDetail");
          }}
        >
          <View>
            <Text style={styles.memoListItemTitle}>買い物リスト</Text>
            <Text style={styles.memoListItemDate}>2020年12月24日 10:00</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              Alert.alert("Are you sure?");
            }}
            style={styles.memoDelete}
          >
            <Feather name="x" size={16} color="#B0B0B0" />
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  memoListItem: {
    backgroundColor: "#ffffff",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.15)",
  },
  memoListItemTitle: {
    fontSize: 16,
    lineHeight: 32,
  },
  memoListItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: "#848484",
  },
  memoDelete: {
    padding: 8,
  },
});
