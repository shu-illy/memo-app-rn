import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { LogInScreen } from "./src/screens/LogInScreen";
import { SignUpScreen } from "./src/screens/SineUpScreen";
import { MemoCreateScreen } from "./src/screens/MemoCreateScreen";
import { MemoEditScreen } from "./src/screens/MemoEditScreen";
import { MemoDetailScreen } from "./src/screens/MemoDetailScreen";
import { MemoListScreen } from "./src/screens/MemoListScreen";

export type RootStackParamList = {
  MemoList: undefined;
  MemoDetail: undefined;
  MemoEdit: undefined;
  MemoCreate: undefined;
  LogIn: undefined;
  SignUp: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LogIn"
        screenOptions={{
          headerStyle: { backgroundColor: "#467FD3" },
          headerTitleStyle: { color: "#FFFFFF" },
          headerTitle: "Memo App",
          headerTintColor: "#FFFFFF",
          headerBackTitle: "Back",
        }}
      >
        <Stack.Screen name="MemoList" component={MemoListScreen} />
        <Stack.Screen name="MemoDetail" component={MemoDetailScreen} />
        <Stack.Screen name="MemoEdit" component={MemoEditScreen} />
        <Stack.Screen name="MemoCreate" component={MemoCreateScreen} />
        <Stack.Screen name="LogIn" component={LogInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
